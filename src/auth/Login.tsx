import React from "react";

type Props = {
  userName: string;
};

const Login: React.VFC<Props> = (props) => {
  return (
    <div>
      <p>{props.userName}</p>
    </div>
  );
};

export default Login;
