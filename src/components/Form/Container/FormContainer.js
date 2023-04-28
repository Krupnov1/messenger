import { useEffect, useState, useRef } from "react";
import { Form } from "../Form";

export const FormContainer = ({ onSubmit }) => {
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
        <Form 
            handleSubmit={handleSubmit}
            value={value}
            handleChange={handleChange}   
        />
    );
};