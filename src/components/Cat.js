// @ts-check

import React from "react";


const Cat = ({name, price, url, addToBasket, index}) => {

    // {basket.length === 0 ? <div>No kitties in your basket</div> : <div>Total: £{sumOfBasket}</div>}
    const addCat = (index) => {
        addToBasket(index);

    }




    return (
        <div className="cat-card">
            <p>{name}</p>
            <p>£{price}</p>
            <img src={url}></img>
            <button onClick={() => addCat(index)}>Add to basket</button>
        </div>
    )
}

// const Cat = ({cat, addToBasket, index}) => {

//     return (
//         <div className="cat-card">
//             <p>{cat.id}</p>
//             <img src={cat.url}></img>
//             <button onClick={() => addToBasket(index)}>Add to basket</button>
//         </div>
//     )
// }


export default Cat;