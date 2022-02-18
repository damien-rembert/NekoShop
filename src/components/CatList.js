//@ts-check
import React from 'react';
// import Cat from './Cat';
import Faker from 'faker';

const CatList = ({cats, addToBasket}) => {

    let randomPrice = () => {
        let maxPounds = 500;
        let maxPennies = 99;
        let price = "£";

        let randomNumber = Math.floor((Math.random() * maxPounds));
        price = price + (randomNumber.toString());
        randomNumber = Math.floor((Math.random() * maxPennies));
        price = price + "." + (randomNumber.toString());
        // console.log("price is " + price);
        return price;
    }
    // let randomNumber = Math.floor((Math.random() * maxNumber));
    //   console.log("max number is "+ maxNumber + "random number is " + randomNumber);
    cats.map((cat) => {
        cat.id = Faker.name.findName();
        cat.price = randomPrice();
        // console.log(cat.name + " costs " + cat.price);
    });
  
return (
    <div className='cat-list'>
        {cats.map((cat, index) => {
            return (
                <div className="cat-card" key={index}>
                    <img src={cat.url}></img>
                    <p>{cat.id}</p>
                    <p>{cat.price}</p>
                    <button onClick={() => addToBasket(index)}>Add to basket</button>
                </div>
            )
        })}
            
        
        {/* {cats.map((cat, index) => {
            return <Cat key={index} cat={cat} addToBasket={addToBasket} index={undefined} /> 
        })} */  }
    </div>
)
}

export default CatList;