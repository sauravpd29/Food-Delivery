import {
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  CLEAR_USER,
  ACCOUNT_DELETED,
} from "../../../redux/types/userTypes";
import api from "../../../utils/api";
import { setAlert } from "../../core/actions/alertAction";

export const deleteAccount = (id) => async (dispatch) => {
  if (
    window.confirm(
      "Are you sure you want to delete this account? This cannot be undone!"
    )
  ) {
    console.log("deleteAccount ho raha?");
    await api.delete(`/users/${id}`);

    dispatch({ type: CLEAR_USER });
    dispatch({ type: ACCOUNT_DELETED });

    dispatch(setAlert("Your account has been permanently deleted"));
  }
};
export const register = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/register", formData); //await:waits until we get response from post method
    console.log(formData);

    //dispatch will connect you to middleware
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    dispatch(setAlert("Successfully registered", "success"));
    dispatch(loadUser());
    //localStorage.setItem("accessToken", res.data.accessToken);
  } catch (err) {
    const errors = err.response.data.subErrors;
    console.log(JSON.stringify("Data is: " + JSON.stringify(errors)));
    if (errors) {
      errors.forEach((error) =>
        dispatch(setAlert(error.field + " " + error.message, "danger"))
      );
    }
    dispatch({ type: REGISTER_FAIL });
  }
};

export const loadUser = (accessToken) => async (dispatch) => {
  try {
    accessToken = localStorage.getItem("accessToken");
    const res = await api.get(`/auth/${accessToken}`, accessToken);
    dispatch({ type: USER_LOADED, payload: res.data });
    // dispatch(setAlert("Welcome " + res.data.username, "success"));
  } catch (err) {}
};

export const login = (email, password) => async (dispatch) => {
  const body = JSON.stringify({ email, password });
  try {
    const res = await api.post("/authenticate", body); //await:waits until we get response from post method

    //dispatch will connect you to middleware
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    dispatch(setAlert("Login successful", "success"));
    dispatch(loadUser());
  } catch (err) {
    console.log(err.response.data.message);
    dispatch(setAlert(err.response.data.message, "danger"));
  }
};

export const logout = () => async (dispatch) => {
  try {
    //  const res = await api.post("/auth");
    dispatch({ type: LOGOUT });
    //dispatch({ type: CLEAR_PROFILE });
    dispatch(setAlert("Logout successful", "success"));
    //dispatch(loadUser());
  } catch (err) {}
};
