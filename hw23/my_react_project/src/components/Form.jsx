import React, { useState } from 'react';

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(`You entered: ${inputValue}`);
    };

    return (
        <div>
            <h2>Simple Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter text:
                    <input type="text" value={inputValue} onChange={handleInputChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default Form;
