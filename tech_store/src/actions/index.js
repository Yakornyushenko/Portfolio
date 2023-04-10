import {
    FETCH_ALL_PHONES_START,
    FETCH_ALL_PHONES_SUCCESS,
    FETCH_ALL_PHONES_FAILURE,

    LOAD_MORE_PHONES_START,
    LOAD_MORE_PHONES_FAILURE,
    LOAD_MORE_PHONES_SUCCESS,

    FETCH_PHONE_START,
    FETCH_PHONE_SUCCESS,
    FETCH_PHONE_FAILURE,

    ADD_PHONE_TO_BASKET,
    REMOVE_PHONE_FROM_BASKET,

    CLEAN_BASKET,

    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,

    SEARCH_PHONE,

    RESET_SEARCH_PHONE
} from './actionsTypes';
import {fetchPhones, loadMorePhones, fetchPhoneById, fetchCategoriesApi} from '../api';
import {getRenderPhonesLength} from "../selectors";

export const fetchAllPhones = () => async dispatch => {
    dispatch({
        type: FETCH_ALL_PHONES_START
    })
    try {
        const allPhones = await fetchPhones()
        dispatch({
            type: FETCH_ALL_PHONES_SUCCESS,
            payload: allPhones
        })
    } catch (err) {
        dispatch({
            type: FETCH_ALL_PHONES_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const addPhoneToBasket = id => dispatch => {
dispatch({
    type: ADD_PHONE_TO_BASKET,
    payload: id
})
}

export const searchPhone = text => dispatch => {
    dispatch({
        type: SEARCH_PHONE,
        payload: text
    })
}
export const resetSearchPhone = text => dispatch => {
    dispatch({
        type: RESET_SEARCH_PHONE,
        payload: text
    })
}

export const loadAllPhones = () => async (dispatch, getState) => {
    const offset = getRenderPhonesLength(getState());
    dispatch({
        type: LOAD_MORE_PHONES_START
    })
    try {
        const allPhones = await loadMorePhones({offset})
        dispatch({
            type: LOAD_MORE_PHONES_SUCCESS,
            payload: allPhones
        })
    } catch (err) {
        dispatch({
            type: LOAD_MORE_PHONES_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const fetchPhone = id => async dispatch => {
    dispatch({
        type: FETCH_PHONE_START
    })
    try {
        const phone = await fetchPhoneById(id);
        dispatch({
            type: FETCH_PHONE_SUCCESS,
            payload: phone
        })
    }   catch (err) {
            dispatch({
                type: FETCH_PHONE_FAILURE,
                payload: err,
                error: true
            })
    }
}

export const removePhoneFromBasket = id => dispatch => {
    dispatch({
        type: REMOVE_PHONE_FROM_BASKET,
        payload: id
    })
}

export const cleanBasket = () => dispatch => {
    dispatch({
        type: CLEAN_BASKET
    })
}

export const fetchCategories = () => async dispatch => {
    dispatch({
        type: FETCH_CATEGORIES_START,
    })
    try {
        const categories = await fetchCategoriesApi()
        dispatch({
            type: FETCH_CATEGORIES_SUCCESS,
            payload: categories
        })
    } catch (err) {
        dispatch({
            type: FETCH_CATEGORIES_FAILURE,
            payload: err,
            error: true
        })
    }
}