import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/clientApp.js";

const uiConfig = {
  signInSuccessUrl: "/",
  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
};

function Auth() {
  return (
    <div
      style={{
        maWidth: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Please Login</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
export default Auth;
