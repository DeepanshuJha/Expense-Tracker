import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount > 0 ? 'plus' : 'minus';
    return (
        <li className={sign}>
            {transaction.text} <span>{sign === 'plus' ? "+" : "-"}₹{Math.abs(transaction.amount)}</span>
            <button onClick={(e) => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li> 
    )
}
