import {FETCH_PHONE_SUCCESS} from "../actions/actionsTypes";

const initialState = {
    id: null
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PHONE_SUCCESS:
            return state = payload.id
        default:
            return state
    }
}