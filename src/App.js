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
      console.log(response)

    if (response.status !== 200) {
      throw new Error ("Google Dinosaur Game Here")

    }

    const data = await response.json()
    console.log("data in app: " + data);
    setCats(data)
    console.log("cats in app: " + cats);
    }

    catch(error){
      setError({error: true, message: error.message});
      console.log(error)
    }
  }

  // this is where the pictures come from bellow //

  useEffect(() => {
    collectCats();
    console.log("this is after collectCats in useEffect")
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
    console.log(basket)
    //setBasket([...basket, index]);
  };

  // I'M JUST A BACKUP DELETE ME
  const addPriceAndName = (aCat) => {

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
    aCat.id = Faker.name.findName();
    aCat.price = randomPrice();
    console.log(aCat.id + " costs " + aCat.price + " url is " + aCat.url);
  };

  console.log("cats: " + cats);
  let tempArray = [...cats];
  console.log("temparray getting cat data: " + tempArray);

  tempArray = tempArray.map((item) => {return addPriceAndName(item)});
  console.log("cats: " + cats);
  console.log("temparray: " + tempArray);
  setCats(tempArray);
  console.log("cats: " + cats);




  //   let randomPrice = () => {
  //     let maxPounds = 500;
  //     let maxPennies = 99;
  //     let price = "";

  //     let randomNumber = Math.floor((Math.random() * maxPounds));
  //     price = price + (randomNumber.toString());
  //     randomNumber = Math.floor((Math.random() * maxPennies));
  //     price = price + "." + (randomNumber.toString());
  //     // console.log("price is " + price);
  //     return price;
  //   }
  //   aCat.id = Faker.name.findName();
  //   aCat.price = randomPrice();
  //   console.log(aCat.id + " costs " + aCat.price + " url is " + aCat.url);
  // };

  // console.log("cats: " + cats);
  // let tempArray = cats.map((item) => {return addPriceAndName(item)});
  // console.log("cats: " + cats);
  // console.log("temparray: " + tempArray);
  // setCats(tempArray);
  // console.log("cats: " + cats);

  



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
          <h1>Neko Shop</h1>
          {/* <Basket /> */}
          <img src='' className='Basket' />
          <CatList cats={cats} addToBasket={addToBasket} />
          {/* <Basket basket={basket} /> */}

      </div>
    );
    }

export default App