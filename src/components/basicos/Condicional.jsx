import React from "react";

export default param => {
    return (
        <div>
            <h3>O numero é {param.numero}</h3>
            {
                param.numero % 2 === 0 ?
                <span>Par</span>
                : <span>Ímpar</span>
            }
        </div>
    )
}