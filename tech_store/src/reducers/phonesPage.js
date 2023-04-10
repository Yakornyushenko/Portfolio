import {
    FETCH_ALL_PHONES_SUCCESS,
    LOAD_MORE_PHONES_SUCCESS, RESET_SEARCH_PHONE,
    SEARCH_PHONE,
} from "../actions/actionsTypes";
import * as R from "ramda";

const initialState = {
    ids: []
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_ALL_PHONES_SUCCESS:
            return R.merge(state, {
               ids: R.pluck('id', payload)
            })
        case LOAD_MORE_PHONES_SUCCESS:
            const ids = R.pluck('id', payload)
            return R.merge(state, {
                ids: R.concat(state.ids, ids)
            })
        case SEARCH_PHONE:
            return Object.assign({}, state, {
                search: payload
            })
        case RESET_SEARCH_PHONE:
            return Object.assign({}, state, {
                search: ''
            })
        default:
            return state
    }
};