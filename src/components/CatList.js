import React from 'react';
import Cat from './Cat';

const CatList = ({cats, addToBasket}) => {
    // console.log("cats in catList: " + cats);
    return (
        <div className='cat-list'>
            {cats.map((cat, index) => {
                console.log(cat);
                return <Cat key={index}  index={index} name={cat.name} url={cat.url} price={cat.price} addToBasket={addToBasket} />
                })}
        </div>
    )
}










// return (
//     <div className='cat-list'>
//         {cats.map((cat, index) => {
//             return (
//                 <div key={index}>
//                     <p>{cat.id}</p>
//                     <img src={cat.url}/>
//                     <button onClick={() => addToBasket(index)}>Add to basket</button>
//                 </div>
//             )
//         })}
//     </div>
// )
// }

export default CatList;