import React from 'react';
import Cat from './Cat';
import Faker from 'faker';

const CatList = ({cats}) => {

    // let randomName = faker.name.findName();
    cats.map( (cat) => {
        cat.id = Faker.name.findName().toString();
        // console.log(cat.name);

    });
    // console.log(cats);

    

return (
    <div>
        {cats.map((cat, index) => {
            return <Cat key={index} cat={ cat } /> 
        })}   
    </div>
)


}

export default CatList;