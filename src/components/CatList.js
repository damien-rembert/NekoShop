//@ts-check

import React from 'react';
import Cat from './Cat';

const CatList = ({cats, addToBasket}) => {

    return (
        <div className='cat-list'>
            {cats.map((cat, index) => {
                // console.log(cat);
                return <Cat key={index}  index={index} name={cat.name} url={cat.url} price={cat.price} addToBasket={addToBasket} />
                })}
        </div>
    )
}

export default CatList;