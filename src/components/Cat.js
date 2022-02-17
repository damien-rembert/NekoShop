import React from "react";

const Cat = ( { cat, addToBasket }) => {
    return (
        <div>
            <p>{cat.id}</p>
            <img src={cat.url}></img>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Cat;