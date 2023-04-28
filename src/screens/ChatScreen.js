import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { FormContainer } from '../components/Form/Container/FormContainer';
import { MsgList } from '../components/MessageList/MsgList';
import { onValue, push } from "firebase/database";
import { getMessagesRefById, getMessagesListRefById, auth, getChatRefByIdName } from "../services/firebase";

let author;

export function ChatScreen() {
  const { id } = useParams();
 
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    onValue(getChatRefByIdName(id), (snapshot) => {
      author = (snapshot.val());
    });

    return author;
  }, [id]);

  
  const sendMessage = (newText) => {
    if (newText !== '') {
      push(getMessagesListRefById(id), {
        id: `msg-${Date.now()}`, 
        text: newText, 
        author: author
      });
    }; 
  };

  useEffect(() => {
    const unsubscribe = onValue(getMessagesRefById(id), (snapshot) => {
      if (!snapshot.val()?.exists) {
        setMessageList(null);
      } else {
        setMessageList(Object.values(snapshot.val().messageList || {}));
      }
    });

    return unsubscribe;
  }, [id]);

  if (!messageList) {
    return <Navigate to="/chat" replace />
  }

  return ( 
    <div className='wrapper'>
      <FormContainer onSubmit={sendMessage} />
      <MsgList messageList={messageList} />
    </div> 
  );
};