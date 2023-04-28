import { ADD_MESSAGE_ARRAY, DELETE_MESSAGE_ARRAY, ADD_MESSAGE } from "./action"; 

const initialState = {};

  export const messagesReducer = (state = initialState, { type, payload, id, newMsg }) => {
    switch (type) {
        case ADD_MESSAGE_ARRAY: {
            return {
                ...state, 
                [payload]: []
            };
        };
        case DELETE_MESSAGE_ARRAY: {
                delete payload[id];
            return payload 
        };
        case ADD_MESSAGE: {
            return {...state, 
                [id]: [...state[id], newMsg]
            };
        };
        default:
            return state;
    }
};

