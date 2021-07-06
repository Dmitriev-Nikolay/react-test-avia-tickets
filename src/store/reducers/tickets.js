import { SET_TICKETS, SET_LOADED } from '../actions/constants';

const initialState = {
    items: null,
    isLoaded: false,
};

const tickets = (state = initialState, action) => {
    switch (action.type) {
        case SET_TICKETS:
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };
        case SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload,
            };
        default:
            return state;
    };
};

export default tickets;