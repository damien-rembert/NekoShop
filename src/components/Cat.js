import React from "react";

const Cat = ({cat}) => {
    return (
        <div>
            <p>{cat.id}</p>
            <img src={cat.url}></img>
        </div>
    )
}

export default Cat;