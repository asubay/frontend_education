import React from 'react';

const CustomTable = (props) => {

    return (
        <div>
            <table className={props.post.style}>
                <thead>
                <tr>
                    <th>АЗС</th>
                    <th>Тип топлива</th>
                    <th>Цена</th>
                    <th>Потребность в день (тонн)</th>
                    <th>Потребность в месяц (тонн)</th>
                </tr>
                </thead>
                <tbody>
                {props.post.data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomTable;