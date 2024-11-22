import axios from "axios";
import {
    ADD_PRODUCT,
    BUY_PRODUCT,
    DELETE_PRODUCT,
    ERROR_PRODUCT,
    GET_PRODUCT_BY_ID,
    GET_PRODUCTS,
    LOAD_PRODUCT,
    UPDATE_PRODUCT
} from "../ActionTypes/ProductUserActiontypes";

export const addProduct = (newProduct) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
        const response = await axios.post("https://mkwebsite-1.onrender.com/api/product/addProduct", newProduct);
        dispatch({
            type: ADD_PRODUCT,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: ERROR_PRODUCT,
            payload: error.response?.data || error.message
        });
    }
};

export const updateProduct = (id, newPrice) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
        const response = await axios.put(`https://mkwebsite-1.onrender.com/api/product/updateProduct/${id}`, { price: newPrice });
        dispatch({
            type: UPDATE_PRODUCT,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: ERROR_PRODUCT,
            payload: error.response?.data || error.message
        });
    }
};

export const deleteProduct = (id) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
        const response = await axios.delete(`https://mkwebsite-1.onrender.com/api/product/deleteProduct/${id}`);
        dispatch({
            type: DELETE_PRODUCT,
            payload: response.data
        });
        dispatch(getProducts()); // Appel correct de getProducts avec dispatch
    } catch (error) {
        dispatch({
            type: ERROR_PRODUCT,
            payload: error.response?.data || error.message
        });
    }
};

export const getProductById = (id) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
        const response = await axios.get(`https://mkwebsite-1.onrender.com/product/getProduct/${id}`);
        dispatch({
            type: GET_PRODUCT_BY_ID,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: ERROR_PRODUCT,
            payload: error.response?.data || error.message
        });
    }
};

export const getProducts = () => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
        const response = await axios.get("https://mkwebsite-1.onrender.com/api/product/getProducts");
        dispatch({
            type: GET_PRODUCTS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: ERROR_PRODUCT,
            payload: error.response?.data || error.message
        });
    }
}
export const buyProduct = (buy) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
        dispatch({
            type: BUY_PRODUCT,
            payload:buy
        });
    } catch (error) {
        dispatch({
            type: ERROR_PRODUCT,
            payload: error
        });
    }
}