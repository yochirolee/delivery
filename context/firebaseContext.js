import React, {createContext } from "react";
import { Firebase } from '../lib/firebase';


export const FirebaseContext = createContext();

export const FirebaseProvider = (props) => {
  const firebase=new Firebase;

  return (
    <FirebaseContext.Provider value={firebase}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
