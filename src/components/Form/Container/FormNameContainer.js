import { useEffect, useState, useRef } from "react";
import { FormName } from "../FormName/FormName";

export const FormNameContainer = ({ onSubmit }) => { 
    const [value, setValue] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue("");
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current?.focus();
    });

    return (
        <FormName
            handleSubmit={handleSubmit}
            value={value}
            handleChange={handleChange}
            inputRef={inputRef}    
        />        
    );
};
