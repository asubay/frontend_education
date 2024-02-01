import React from 'react';

const CurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Month is zero-based, so add 1
    const day = currentDate.getDate();
    return (
        <h3>на {day}-{month}-{year}</h3>
    );
};

export default CurrentDate;