import React from 'react';
import Cat from './Cat';

const CatList = ({cats}) => {
return (
    <div>
        {cats.map((cat, index) => {
            return <Cat key={index} cat={ cat } /> 
        })}   
    </div>
)


}

export default CatList;