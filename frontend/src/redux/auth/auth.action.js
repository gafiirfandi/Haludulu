import axios from "../../components/axios";

export const authStart = () => ({
  type: "AUTH_START",
});

export const authSuccess = (token) => ({
  type: "AUTH_SUCCESS",
  token: token,
});

export const authFail = (error) => ({
  type: "AUTH_FAIL",
  error: error,
});

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: "AUTH_LOGOUT",
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authLogin = (username, password) => {
  return async (dispatch) => {
    dispatch(authStart());
    axios
      .post("/rest-auth/login/", {
        username: username,
        password: password,
      })
      .then((res) => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token));
        checkAuthTimeout(3600);
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token === undefined) dispatch(logout());
    else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
