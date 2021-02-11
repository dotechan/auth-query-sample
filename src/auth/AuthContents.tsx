import React from "react";

import Guest from "./Guest";
import Login from "./Login";
import { useAuth } from "./useAuth";

const AuthContents: React.VFC = () => {
  console.log("AuthContents - start");

  const auth = useAuth();

  console.log("AuthContents - end");
  return <div>{auth ? <Login userName={auth}></Login> : <Guest></Guest>}</div>;
};

export default AuthContents;
