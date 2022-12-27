import React, { useReducer } from "react";
import MkdSDK from "./utils/MkdSDK";

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      //TODO
      sdk
    .login(action.email, action.password, action.role)
    .then((response) => {
      if (response.error) {
        alert(response.message);
      } else {
        localStorage.setItem("token", response.token);
        localStorage.setItem("expire_at", response.expire_at);
        localStorage.setItem("role", action.role);
        return sdk.check(action.role);
      }
    })
    .then((response) => {
      if (response.error) {
        alert(response.message);
      } else {
        dispatch({
          type: "LOGIN_SUCCESS",
          user: response.user,
          token: response.token,
          role: action.role,
        });
      }
    })
    .catch((error) => {
      console.error(error);
      alert(error.message);
    });
      return {
        ...state,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

let sdk = new MkdSDK();

export const tokenExpireError = (dispatch, errorMessage) => {
  const role = localStorage.getItem("role");
  if (errorMessage === "TOKEN_EXPIRED") {
    dispatch({
      type: "Logout",
    });
    window.location.href = "/" + role + "/login";
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  React.useEffect(() => {
    //TODO
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
