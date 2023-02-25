import React from "react";
import produtos from '../../data/Products';

export default props => {

    function getProductsToLI() {
        return produtos.map(prod =>{
            return <li key={prod.id}>{prod.id} - {prod.name} -- R$ {prod.preco}</li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProductsToLI()}
            </ul>
        </div>
    )
}