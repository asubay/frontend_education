import React, { useState } from 'react';

const WeatherModal = ({ isOpen, closeModal }) => {
    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <p>This is the modal content!</p>
            </div>
        </div>
    );
};

export default WeatherModal;