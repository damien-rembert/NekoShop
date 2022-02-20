//@ts-check
import React, { useEffect, useState } from 'react';
import './App.css';
import CatList from './components/CatList';
import Navbar from './components/Navbar';
import Basket from './components/Basket';
import Faker from 'faker';


const App = () => {
  const [showBasket, setShowBasket] = useState(false);
  const [basket, setBasket] = useState([]);
  const [cats, setCats] = useState();
  const [error, setError] = useState({
    error: false,
    message: ''
  });

    const collectCats = async () => {
    try {
      const response = await fetch ("https://api.thecatapi.com/v1/images/search?limit=12&mime_types=jpg,png")

    if (response.status !== 200) {
      throw new Error ("Google Dinosaur Game Here")

    }

    const data = await response.json()
    setCats(data)
    }

    catch(error){
      setError({error: true, message: error.message});
      console.log(error)
    }
  }


  useEffect(() => {
    collectCats();
  }, [])

  if (error.error){
    return <h1>you messed up stop touching things: {error.message} </h1>
  }
  if (!cats){
    return <h1>loading cats.....</h1>
  }


  const sumOfBasket = () => {
    let sum = 0;
    basket.forEach((cat) => {
      sum += parseFloat(cat.price);
    })
    return sum;
  }


  const addToBasket = (index) => {
    console.log(index)
    let newBasketItems = [...basket];
    newBasketItems.push(cats[index])
    setBasket(newBasketItems)
    sumOfBasket();
  };


  let currentSum = sumOfBasket();


  const addPriceAndName = (item) => {
    let randomPrice = () => {
      let maxPounds = 500;
      let maxPennies = 99;
      let price = "";

      let randomNumber = Math.floor((Math.random() * maxPounds));
      price += (randomNumber.toString());
      randomNumber = Math.floor((Math.random() * maxPennies));
      price = price + "." + (randomNumber.toString());
      return price;
    }
    item.name = Faker.name.findName();
    item.price = randomPrice();
  };

  if (cats.length > 0) {
    let lastItem = cats.length - 1;
    if  (!cats[lastItem].price) {
      let tempArray = [...cats];
      tempArray.forEach((item) => {return addPriceAndName(item)});
      setCats(tempArray);
    }
  }

  const toggleShowBasket = () => {
    console.log("clicked", showBasket)
    setShowBasket(!showBasket)
  }
  



    return (
        <div>
            <Navbar toggleBasket={ toggleShowBasket } sumOfBasket={ currentSum } />
            <h1>Welcome to Neko Shop</h1>
            <h4>Why would you adopt from a shelter, when you can buy from us??</h4>
            {showBasket && <Basket basket={basket} setBasket={setBasket} sumOfBasket={currentSum}  toggleBasket={ toggleShowBasket }/>}
            <CatList cats={cats} addToBasket={addToBasket} />
        </div>
      );
    }

export default App