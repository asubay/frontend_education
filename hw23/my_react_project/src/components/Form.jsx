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
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter text"  value={inputValue} onChange={handleInputChange}/>
                <button type="submit" className="button-70 mt-2 col-2">Submit</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default Form;
