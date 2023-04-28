import { chatsReducer } from "../reducer";
import { addChat } from "../actions";

describe('chats reducer', () => {
    const newChat = {
        id: `chat-${Date.now()}`,
        name: "newChatName",
    };

    it("the function returns an array of objects", () => {
        const result = chatsReducer([], addChat(newChat));
        expect(result).toEqual([newChat]);
    });
});