import React from "react";
import Filho from "./Filho";

export default props => 
<div>
    <Filho {...props}><strong>João</strong></Filho>
    <Filho {...props}><strong>Maria</strong></Filho>
    <Filho {...props}><strong>Pedro</strong></Filho>
</div>