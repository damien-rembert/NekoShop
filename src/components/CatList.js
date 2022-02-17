import React from 'react';
import Cat from './Cat';
import Faker from 'faker';

const CatList = ({cats, addToBasket}) => {
    cats.map( (cat) => {
        cat.id = Faker.name.findName().toString();
    });
return (
    <div className='cat-list'>
        {cats.map((cat, index) => {
            return <Cat key={index} cat={cat} addToBasket={addToBasket} /> 
        })}   
    </div>
)


}

export default CatList;