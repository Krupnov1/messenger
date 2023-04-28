import { textAlign } from "@mui/system";
import { render, screen } from "@testing-library/react";
import { MsgList } from "../MsgList";

 describe("MsgList", () => {
    const messageList = [{
        id: `msg-${Date.now()}`, 
        text: 'newText', 
        author: 'author'
    }];
    it("render passed text", () => {
        render(<MsgList messageList={messageList}/>);
        const text = screen.getByText('newText'); 
        expect(text).toBeDefined();
    });
 });