/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from "react";
import Router from "next/router";
import Layout from "../layout/layout";
import { AuthContext } from "../context/auth";
import { redirectIfAuthenticated } from "../lib/session";
import { FirebaseContext } from "../context/firebaseContext";

export const withAuthWrapper = (Component) => (props) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { activateAuth } = useContext(AuthContext);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    redirectIfAuthenticated();
  }, []);

  if (errorMessage) {
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  }

  const saveAuthAndRedirect = (data) => {
    try {
      const { user } = data;
      let { idToken = null } = data;
      if (!idToken) idToken = user.uid;
      activateAuth(user, idToken);
      setLoading(false);
      Router.push("/main");
    } catch (error) {
      console.log({ error });
    }
  };

  const onGoogleSignIn = async () => {
    setLoading(true);
    firebase
      .doAuthWithGoogle()
      .then((resp) => {
        saveAuthAndRedirect(resp);
      })
      .catch((error) => {
        const { message } = error;
        setLoading(false);
        setErrorMessage(message);
      });
  };

  const onGithubSignIn = async () => {
    setLoading(true);
    await firebase
      .doAuthWithGithub()
      .then((resp) => saveAuthAndRedirect(resp))
      .catch((error) => {
        setLoading(false);
        const { message } = error;
        setErrorMessage(message);
      });
  };

  return (
    
      <div className=" mx-auto h-full ">
        <div className="main">
          {errorMessage && <p>Error</p>}
          <Component
            {...props}
            loading={loading}
            onGoogleSignIn={onGoogleSignIn}
            onGithubSignIn={onGithubSignIn}
          />
        </div>
      </div>
   
  );
};
