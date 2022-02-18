import React from "react";

const Basket = ({basket, setBasket, sumOfBasket}) => { 
 
    return (
        <div className="basket">
            {basket.map((basketItem, index) => {
                return (
                    <div>
                        <p key={index}>{basketItem.name} - £{basketItem.price}</p>
                    </div>
                )
            })}
            {basket.length === 0 ? <div>No kitties in your basket</div> : <div>Total: £{sumOfBasket}</div>}
        </div>
    )
}
    


    // const handlerRemoveCat = () => {
    //     setBasket([...basket, cats] -1);
    // }

//     return (    
//     basket.map((item, index))(
//     <div>
//         <h2>Cats in your basket</h2>
//         <div>
//             <p>{Basket}</p>
//             <div key={basket.id}>
//                 {basket.text}
//             </div>
//             <button className="removeCat" onClick={() => handlerRemoveCat(item.id)}>Remove Cat</button>
//             {basket.length === 0 && <div>No kitties in your basket</div>}
//         </div>
//     </div>
//     ))
// }

  //   const Basket = ({basket}) => {
  //     return (
  //       <div>
  //         {basket[0]}
  //       </div>
  //     )
  // }



export default Basket