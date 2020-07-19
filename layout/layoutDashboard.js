import React, { useContext } from "react";
import Header from "./header";
import SideBar from "./sidebar";
import { AuthContext } from "../context/auth";

function LayoutDashboard({ children, ...pageProps }) {
  const auth = useContext(AuthContext);
 

  return auth.userLoaded ? (
    <>
      <Header  />
      <div className="flex flex-row">
        <SideBar />
        <div className="w-full">{children}</div>
      </div>
    </>
  ) : (
    //Router.push("/")
    <p></p>
  );
}

export default LayoutDashboard;
