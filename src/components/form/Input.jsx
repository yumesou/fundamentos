import React, { useState } from "react";

export default props => {
    const [name,setName] = useState('Pedro')
    return (
        <>
        <h3>Inputs</h3>
        <input type="text" value={name}
        onChange={e=>{
            setName(e.target.value)
        }}/>
        </>
    )
}