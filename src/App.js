import React, { useEffect, useState } from 'react';
import './App.css';
import CatList from './components/CatList';
import Navbar from './components/Navbar';
// import Basket from './components/Basket';

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
      console.log(response)

    if (response.status !== 200) {
      throw new Error ("Google Dinosaur Game Here")

    }

    const data = await response.json()
    console.log(data)
    setCats(data)
    console.log(cats)
    }

    catch(error){
      setError({error: true, message: error.message});
      console.log(error)
    }
  }

  // this is where the pictures come from bellow //

  useEffect(() => {
    collectCats();
    console.log("nooooooo!!")
  }, [])

  if (error.error){
    return <h1>you messed up stop touching things: {error.message} </h1>
  }
  if (!cats){
    return <h1>loading cats.....</h1>
  }

  const addToBasket = (index) => {
    console.log(cats)
    let newBasketItems = [...basket];
    newBasketItems.push(cats[index])
    setBasket(newBasketItems)
    console.log('this is my backet', basket)
    //setBasket([...basket, index]);
  };

  // addToBasketClicked(event){
  //   let button = event.target
  //   let shopItem = button.parentElement.parentElement
  //   let catImage = shopItem.getElementByClassName("basket")[0]
  //   let price = shopItem.getElementByClassName("")[0].innerText
  //   addToBasket(catImage, price)
  // }

  // addToBasket(catImage, price){
  //   let basketRow = document.createElement("div")
  //   basketRow.classList.add("")
  //   let basketItems = document.getElementsByClassName("")[0]
  //   let basketRowContent = 
  //   basketRow.innerHTML =basketRowContent
  //   basketItems.append(basketRow)
  // }

    return (
        <div>
            <Navbar />
            <h1>Welcome to Neko Shop</h1>
            <h4>Why would you adopt from a shelter , when you can buy from us??</h4>
            {/* <Basket /> */}
            <img src='' className='Basket' />
            <CatList cats={cats} addToBasket={addToBasket} />
            {/* <Basket basket={basket} /> */}
        </div>
      );
    }

  //   const Basket = ({basket}) => {
  //     return (
  //       <div>
  //         {basket[0]}
  //       </div>
  //     )
  // }
export default App