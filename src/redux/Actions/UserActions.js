import { CURRENT_USER,DELETE_USER,ERROR_USER,LOAD_USER,LOGIN_USER,LOGOUT_USER,REGISTER_USER,RESET_PASSWORD
} from "../ActionTypes/ProductUserActiontypes";
import axios from "axios";

export const loginUser = (email, password) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const response = await axios.post('https://mkwebsite-1.onrender.com/api/user/login', { email, password });
        dispatch({
            type: LOGIN_USER,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: ERROR_USER,
            payload: error.response?.data || error.message
        });
    }
};

export const logoutUser = () => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        dispatch({ type: LOGOUT_USER });
    } catch (error) {
        dispatch({
            type: ERROR_USER,
            payload: error.response?.data || error.message
        });
    }
};

export const registerUser = (newUser) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const response = await axios.post('https://mkwebsite-1.onrender.com/api/user/register', newUser);
        dispatch({
            type: REGISTER_USER,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: ERROR_USER,
            payload: error.response?.data || error.message
        });
    }
};

export const deleteUser = (_id) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const response = await axios.delete(`https://mkwebsite-1.onrender.com/api/user/delete/${_id}`);
        dispatch({
            type: DELETE_USER,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: ERROR_USER,
            payload: error.response?.data || error.message
        });
    }
};

export const resetPasswordUser = (_id, newPassword) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const response = await axios.put(`https://mkwebsite-1.onrender.com/api/user/resetPassword/${_id}`, { newPassword });
        dispatch({
            type: RESET_PASSWORD,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: ERROR_USER,
            payload: error.response?.data || error.message
        });
    }
};

export const current = () => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        };
        const response = await axios.get("https://mkwebsite-1.onrender.com/api/user/current", config);
        dispatch({
            type: CURRENT_USER,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: ERROR_USER,
            payload: error.response?.data || error.message
        });
    }
};
