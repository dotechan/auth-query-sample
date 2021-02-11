import React, { useEffect, useState } from "react";

import { AuthContext } from "./AuthContext";

const AuthProvider: React.FC = (props) => {
  console.log("AuthProvider - start");

  const [auth, setAuth] = useState("");
  useEffect(() => {
    console.log("AuthProvider - useEffect");

    const search = document.location.search.substring(1);
    const searchParams = new URLSearchParams(search);
    if (searchParams.has("token")) {
      setAuth("Login User");
    }
  }, []);

  console.log("AuthProvider - end");

  return (
    <AuthContext.Provider value={auth}>
      <div>{props.children}</div>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
