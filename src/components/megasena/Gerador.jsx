import React, { useState } from "react";

export default props => {
    const [arr,setArr] = useState(Array(props.qtnum).fill(0))

    function gerarNovo(arr){
        const min = 1;
        const max = 60;
        const novoNumero = Math.floor(Math.random() * (max - min) + min)
        return arr.includes(novoNumero) ? gerarNovo(arr) : novoNumero;
    }

    const click = ()=>{
        const novoArray = Array(props.qtnum)
        .fill(0)
        .reduce(a => [...a,gerarNovo(a)],[])
        .sort((a,b)=> a-b)
        setArr(novoArray)
    }

    return (
    <div>
        <h3>Numeros da mega sena</h3>
        <h4>{arr.join(' ')}</h4>
        <div>
            <button onClick={click}>Gerar</button>
        </div>
    </div>
    )
}