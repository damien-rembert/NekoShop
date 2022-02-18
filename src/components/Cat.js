// import React from "react";


const Cat = ({name, price, url, addToBasket, index}) => {

    return (
        <div className="cat-card">
            <p>{name}</p>
            <p>{price}</p>
            <img src={url}></img>
            <button onClick={() => addToBasket(index)}>Add to basket</button>
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