import React from 'react';
import Cat from './Cat';

const CatList = ({cats, addToBasket}) => {
return (
    <div>
        {cats.map((cat, index) => {
            return <Cat key={index} cat={cat} addToBasket={addToBasket} /> 
        })}   
    </div>
)


}

export default CatList;