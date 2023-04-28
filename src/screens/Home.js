import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../components/Form/LoginForm/LoginForm";
import { logIn, signUp } from "../services/firebase";

export const Home = ({ isSignUp }) => {
  const [error, setError] = useState('');
  
  const handleSubmit = async ({ login, pass }) => {
    try {
      if (isSignUp) {
        await signUp(login, pass);
      } else {
        await logIn(login, pass);
      };
    } catch (e) {
      setError(e.message)
    }
  };
  
  return (
    <>
      <h2>Home Page</h2>
      <LoginForm onSubmit={handleSubmit} />
      {error && <h4>{error}</h4>}
      <Link to={isSignUp ? "/" : "/signup"}>
        {isSignUp ? "to login" : "to signup"}
      </Link>
    </>
  );
};