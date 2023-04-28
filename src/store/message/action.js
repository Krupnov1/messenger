export const ADD_MESSAGE_ARRAY = "MESSAGE::ADD_MESSAGE_ARRAY";
export const DELETE_MESSAGE_ARRAY = "MESSAGE::DELETE_MESSAGE_ARRAY";
export const ADD_MESSAGE = "MESSAGE::ADD_MESSAGE";

let timeout;

export const addMessageArray = (id) => ({
    type: ADD_MESSAGE_ARRAY,
    payload: id
});

export const deleteMessageArray = (id, newMessages) => ({
    type: DELETE_MESSAGE_ARRAY, 
    id,
    payload: newMessages
});

export const addNewMessage = (newMsg, id) => ({ 
    type: ADD_MESSAGE,
    id,
    newMsg
});

export const addMessageWithReply = (newMsg, id) => (dispatch) => {
    dispatch(addNewMessage(newMsg, id));
    if (newMsg.author !== 'Bot' && newMsg.author !== '' && newMsg.author !== undefined) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            dispatch(addNewMessage({
                id: `msg-${Date.now()}`, 
                text: 'Messenger bot welcomes you!', 
                author: 'Bot'}, 
                id));
        }, 1500);
    };
};