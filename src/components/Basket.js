// @ts-check
import React from "react";

const Basket = ({basket, setBasket, sumOfBasket, toggleBasket}) => { 


    const remover = (index) => {
        let storedBasket = [...basket];
        storedBasket.splice(index, 1);
        setBasket(storedBasket);
    }
 
    return (
        <div className="basket">
            <div>
                <label>Close basket <button onClick={toggleBasket}>X</button></label>
                
            </div>
            {basket.map((basketItem, index) => {
                return (
                    <div>
                        <p key={index}>{basketItem.name} - £{basketItem.price}</p>
                        <button className='button' onClick={() => remover(index)}>&#x1F5D1; Remove</button>

                    </div>
                )
            })}
            {basket.length === 0 ? <div className="bottomLine">No kitties in your basket</div> : <div className="bottomLine">Total: £{sumOfBasket}</div>}
        </div>
    )
}


export default Basket