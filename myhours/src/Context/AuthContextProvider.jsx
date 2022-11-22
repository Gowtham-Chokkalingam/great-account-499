import React from "react";

export const AuthContext = React.createContext();


function AuthContextProvider({ children }) {
  const [state, setState] = React.useState({
    isAuth: false,
    token: null,
    userName:""
  });

  const loginUser = (tkn,name) => {
    console.log('name:', name)
    console.log('tkn:', tkn)

    setState({ ...state, isAuth: true, token: tkn, userName:name });
  };

  const logoutUser = () => {
    setState({ ...state, isAuth: false, token: null,userName:"" });
  };

  return <AuthContext.Provider value={{ authState: state, loginUser, logoutUser }}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
