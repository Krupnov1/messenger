export const selectChats = (state) => state.chats;
export const selectMessages = (state) => state.message;
export const selectMessageListByChatId = (id) => (state) => state.message[id];