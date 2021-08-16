import React from 'react';

function TaskCard({ name, quantity, price, description, code }){
    return(
        <>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{description}</td>
            <td>{code}</td>    
        </>
    );
}

export default TaskCard;