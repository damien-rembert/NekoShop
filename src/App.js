import React, { useEffect, useState } from 'react';
import './App.css';
import CatList from './components/CatList';

const App = () => {
  const [ basket, setBasket] = useState();
  const [ cats, setCats] = useState("");
  const [error, setError] = useState({
    error: false,
    message: ''
  });

  const collectCats = async () => {
    try {
      const response = await fetch ("https://api.thecatapi.com/v1/images/search?limit=10")
      console.log(response)

    if (response.status !== 200) {
      throw new Error ( "google dinousr game here")

    }

    const data = await response.json()
    console.log(data)
    setCats (data)
    console.log(cats)
    }

    catch (error){
      setError ({ error: true, message: error.message});
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

    return (
      <div>
          <h1>Neko Shop</h1>
          <img src='' className='Basket' />
          <CatList cats={cats} />
      </div>
    );

  
    addToBasketClicked(event){
      let button = event.target
      let shopItem = button.parentElement.parentElement
      let catImage = shopItem.getElementByClassName("basket")[0].src
      let price = shopItem.getElementByClassName("")[0].innerText
      addToBasket(catImage, price)
    }
  
    addToBasket(catImage, price){
      let basketRow = document.createElement("div")
      basketRow.classList.add("")
      let basketItems = document.getElementsByClassName("")[0]
      let basketRowContent = 
      basketRow.innerHTML =basketRowContent
      basketItems.append(basketRow
}

export default App;
