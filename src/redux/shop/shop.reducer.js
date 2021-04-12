import shopActionTypes from './shop.types';

const INITIAL_STATE = {
    collection: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collection: action.payload
            }
        default:
            return state;
    }
};

export default shopReducer;