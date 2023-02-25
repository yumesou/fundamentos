import React from "react";

export default props => {
    return (
        <div>
            <button onClick={() => {
                props.click(Math.random(),'Agora')
            }}>Alterar</button>
        </div>
    )
}
