import React, { useState } from "react";
import Sub from "./Sub";

export default props => {
    
    const [num,setNum] = useState(0)
    const [val,setVal] = useState('Valor')

    function onClick(value,text){
        setNum(value)
        setVal(text)
    }
    return (
        <div>
            <h3>{val}: {num}</h3>
            <Sub click={onClick}></Sub>
        </div>
    )
}
