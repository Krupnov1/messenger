import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormNameContainer } from "../components/Form/Container/FormNameContainer";
import { logOut } from "../services/firebase";
import { stopProfileTrack, initProfileTrack, setShowName, setNameFB } from "../store/profile/action";
import { selectName, selectShowName } from "../store/profile/selectors";

export const Profile = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const showName = useSelector(selectShowName);
  
  const handleClick = () => {
    dispatch(setShowName(!showName));
  };

  const handleSubmit = (text) => {
    dispatch(setNameFB(text));
  };

  useEffect(() => {
    dispatch(initProfileTrack());

    return () => {
      dispatch(stopProfileTrack());
    };

  }, []);

  return (
    <>
      <h2>Profile Page</h2>
      <button onClick={logOut}>LOGOUT</button>
      {showName && <span>{name}</span>}
      <input onClick={handleClick} type="checkbox"></input> 
      <FormNameContainer onSubmit={handleSubmit} />
    </>
  );
};
    
