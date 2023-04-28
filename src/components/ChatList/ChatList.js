import './ChatList.style.css';
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { Chat } from "../Chat/Chat";
import { FormContainer } from "../Form/Container/FormContainer";
import { theme } from '../Theme/Theme';
import { useEffect, useState } from 'react';
import { onValue, remove, set } from 'firebase/database';
import { chatsRef, getChatRefById, getMessagesRefById } from '../../services/firebase';

export const ChatList = () => { 
    const [chats, setChats] = useState([]);

    const dispatch = useDispatch();
    
    const handleSubmit = (newChatName) => {
        const newChat = {
            id: `chat-${Date.now()}`,
            name: newChatName, 
        };

        set(getChatRefById(newChat.id), newChat);
        set(getMessagesRefById(newChat.id), { exists: true });  
    };

    const deleteChats = (id) => {
      remove(getChatRefById(id)); 
      set(getMessagesRefById(id), null);  
    };

    useEffect(() => {
        const unsubscribe = onValue(chatsRef, (snapshot) => {
            setChats(Object.values(snapshot.val() || {}));
        });
        
        return unsubscribe;
    }, []);

    return (
        <div className="App" style={{ backgroundColor: theme.palette.primary.main }}>
            <div>    
                {chats.map((data) => (
                    <Link to={`/chat/${data.id}`} key={data.id}> 
                        <Chat id={data.id} name={data.name} text={data.text} deleteChats={deleteChats}/>
                    </Link>    
                ))}
                <div className="addChatForm">
                    <FormContainer onSubmit={handleSubmit} />
                </div>
            </div>
            <Outlet />
        </div>
    );
};
