import {React, useState} from "react";







const Basket = ({cats, item, index}) => {
    const [basket, setBasket] = useState({
        id: null,
        value: ''
    });


    const handlerRemoveCat = () => {
        setBasket([...basket, cats] -1);
    }

    return 
    basket.map((item, index))(
    <div>
        <h2>Cats in your basket</h2>
        <div>
            <p>{Basket}</p>
            <div key={basket.id}>
                {basket.text}
            </div>
            <button className="removeCat" onClick={() => handlerRemoveCat(item.id)}>Remove Cat</button>
            {basket.length === 0 && <div>No kitties in your basket</div>}
        </div>
    </div>
    )
}

export default Basket