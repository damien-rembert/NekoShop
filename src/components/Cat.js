// @ts-check

import React, { useState } from "react";


const Cat = ({name, price, url, addToBasket, index}) => {
 
    let [addedToBasket, setAddedToBasket] = useState(false);
    const addCat = (index) => {
        addToBasket(index);
        setAddedToBasket(true);
        setTimeout(() => {setAddedToBasket(false)}, 600);
    }

    return (
        <div className="cat-card">
            <p>{name}</p>
            <p>£{price}</p>
            <img src={url} alt='just another cat' ></img>

            {addedToBasket ? <button >Added to basket</button> : <button onClick={() => addCat(index)}>Add to basket</button>}
        </div>
    )
}

export default Cat;