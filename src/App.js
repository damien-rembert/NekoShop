import React, { useEffect, useState } from 'react';
import './App.css';
import CatList from './components/CatList';
import Navbar from './components/Navbar';
import Basket from './components/Basket';
import Faker from 'faker';


const App = () => {
  const [basket, setBasket] = useState([]);
  const [cats, setCats] = useState();
  const [error, setError] = useState({
    error: false,
    message: ''
  });

  




  const collectCats = async () => {
    try {
      const response = await fetch ("https://api.thecatapi.com/v1/images/search?limit=10")
      // console.log(response)

    if (response.status !== 200) {
      throw new Error ("Google Dinosaur Game Here")

    }

    const data = await response.json()
    // console.log("collected data in app: " + data);
    setCats(data)
    // console.log("collected cats in app: " + cats);
    }

    catch(error){
      setError({error: true, message: error.message});
      console.log(error)
    }
  }

  // this is where the pictures come from bellow //

  useEffect(() => {
    collectCats();
    console.log("this is after collectCats in useEffect.")
  }, [])

  if (error.error){
    return <h1>you messed up stop touching things: {error.message} </h1>
  }
  if (!cats){
    return <h1>loading cats.....</h1>
  }

  const addToBasket = (index) => {
    console.log(index)
    let newBasketItems = [...basket];
    newBasketItems.push(cats[index])
    setBasket(newBasketItems)
    console.log("cats in the basket " + basket.length)
    //setBasket([...basket, index]);
    sumOfBasket();
  };

  const sumOfBasket = () => {
    let sum = 0;
    basket.forEach((cat) => {
      sum += parseFloat(cat.price);
    })
    alert(sum);
    console.log(sum);
    return sum;


  }


  const addPriceAndName = (item) => {
    // console.log("item passed to addPriceAndName: " + item.id );
    let randomPrice = () => {
      let maxPounds = 500;
      let maxPennies = 99;
      let price = "";

      let randomNumber = Math.floor((Math.random() * maxPounds));
      price = price + (randomNumber.toString());
      randomNumber = Math.floor((Math.random() * maxPennies));
      price = price + "." + (randomNumber.toString());
      // console.log("price is " + price);
      return price;
    }
    item.name = Faker.name.findName();
    item.price = randomPrice();
    // let newItem = {price: [randomPrice()], name: [Faker.name.findName()], url: [item.url]}
    // return newItem;
    // console.log(newItem.name + " costs " + newItem.price + " url is " + newItem.url);
  };

  // console.log("cats: " + cats);
  if (cats.length > 0) {
    let lastItem = cats.length - 1;
    if  (!cats[lastItem].price) {
      let tempArray = [...cats];
      tempArray.forEach((item) => {return addPriceAndName(item)});
      // console.log("temparray: " + tempArray);
      setCats(tempArray);
      // console.log("cats: " + cats);
    }
  }

  




    return (
     
      <div>
          <Navbar />
          <h1>Neko Shop</h1>
          {/* <Basket /> */}
          <img src='' className='Basket' />
          <CatList cats={cats} addToBasket={addToBasket} />
          {/* <Basket basket={basket} /> */}

      </div>
    );
    }

export default App