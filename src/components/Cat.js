import React from "react";

const Cat = (cat, addToBasket, index) => {

    return (
        <div className="cat-card">
            <p>{cat.id}</p>
            <img src={cat.url}></img>
            <button onClick={() => addToBasket(index)}>Add to basket</button>
        </div>
    )
}

export default Cat;