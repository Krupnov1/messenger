import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ChatScreen } from './screens/ChatScreen';
import { Home } from './screens/Home';
import { Profile } from './screens/Profile'
import { ChatList } from './components/ChatList/ChatList';
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from 'redux-persist/integration/react';
import { Articles } from './screens/Articles/Articles';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import React, { useEffect, useState } from 'react';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import { auth } from './services/firebase';
import { onAuthStateChanged } from "firebase/auth"

  function App() {

  const [authed, setAuthed] = useState(false);
  const handleLogin = () => {
    setAuthed(true);
  };

  const handleLogout = () => {
    setAuthed(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        handleLogin();
      } else {
        handleLogout();
      }
    });
    
    return unsubscribe;
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<PublicRoute authed={authed}/>}>
              <Route path="" element={<Home onAuth={handleLogin}/>} />
            </Route>
            <Route path="/signup" element={<Home onAuth={handleLogin} isSignUp/>} />
            <Route path="/chat" element={<PrivateRoute authed={authed}/>}>
              <Route path="" element={<ChatList />}>
                <Route path=":id" element={<ChatScreen />} />
              </Route>
            </Route>
            <Route path="/profile" element={<PrivateRoute authed={authed}/>}>
              <Route path="" element={<Profile onLogout={handleLogout}/>} />
            </Route> 
            <Route path="/articles" element={<Articles />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App;