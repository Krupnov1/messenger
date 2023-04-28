import { TOGGLE_CHECKBOX, SET_NAME } from "./action";

const initialState = {
    showName: false,
    name: "CHECKBOX_YES",
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CHECKBOX: {
            return {
                ...state,
                showName: !state.showName, 
            };
        }
        case SET_NAME: {
            return {
                ...state,
                name: action.newName,
            };
        }
        default:
            return state; 
    };
};