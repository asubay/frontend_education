import React from 'react';
import classes from './Table.module.css'

const Table = () => {
    return (
        <div>
            <table className={classes.table}>
                <thead>
                <tr>
                    <th>АЗС</th>
                    <th>Тип топлива</th>
                    <th>Цена</th>
                    <th>Потребность в день (тонн)</th>
                    <th>Потребность в месяц (тонн)</th>
                </tr>
                </thead>
                <tbody id="fuelTableBody"></tbody>
            </table>
        </div>
    );
};

export default Table;