import {
  CLEAR_FOOD,
  CREATE_FOOD,
  GET_FOOD,
  GET_FOODS,
  FOOD_ERROR,
  UPDATE_FOOD,
  FOOD_DELETED,
} from "../../../redux/types/foodTypes";
import api from "../../../utils/api";
import { setAlert } from "../../core/actions/alertAction";

export const getFoods = () => async (dispatch) => {
  dispatch({ type: CLEAR_FOOD });

  try {
    const res = await api.get("/food");

    dispatch({
      type: GET_FOODS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FOOD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getFoodById = (userId) => async (dispatch) => {
  try {
    const res = await api.get(`/food/${userId}`);

    dispatch({
      type: GET_FOOD,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FOOD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addFood = (formData, navigate) => async (dispatch) => {
  try {
    const res = await api.post("/food", formData);

    dispatch({
      type: CREATE_FOOD,
      payload: res.data,
    });

    dispatch(setAlert("Food Details Added", "success"));

    navigate("/dashboard/");
  } catch (err) {
    dispatch(setAlert(err.response.data.message, "danger"));

    dispatch({
      type: FOOD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateFood = (formData, navigate, id) => async (dispatch) => {
  try {
    const res = await api.put(`/food/${id}`, formData);

    dispatch({
      type: UPDATE_FOOD,
      payload: res.data,
    });
    dispatch(setAlert("Food Details Updated", "success"));
    navigate("/dashboard/");
  } catch (err) {
    dispatch(setAlert(err.response.data.message, "danger"));

    dispatch({
      type: FOOD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getFoodByType = (type) => async (dispatch) => {
  try {
    const res = await api.get(`/food/dummy/${type}`);

    dispatch({
      type: GET_FOODS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FOOD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteFood = (id) => async (dispatch) => {
  try {
    const res = await api.delete(`/food/${id}`);

    dispatch({
      type: CLEAR_FOOD,
    });
    dispatch({ type: FOOD_DELETED });
    dispatch(setAlert("Food Removed", "success"));
  } catch (err) {
    dispatch(setAlert(err.response.data.message, "danger"));
    dispatch({
      type: FOOD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
//   export default getFoods;
