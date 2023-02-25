import React, { Component } from "react";

export default class Contador extends Component {

    constructor(props){
        super(props)
        this.state = {
            passo: props.passo || 1,
            valor: props.valor || 0
        }
    }

    inc = ()=>{
        this.setState({
            valor: this.state.valor + this.state.passo,
        })
    }

    dec = ()=>{
        this.setState({
            valor: this.state.valor - this.state.passo,
        })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <div>
                <label htmlFor='passoInput'>Passo: </label>
                <input id="passoInput" type="number" value={this.state.passo} style={{fontSize: '1.4rem',width: '60px'}}
                onChange={e => this.setState({passo: +e.target.value})} />
                </div>
                <h4>Valor: {this.state.valor}</h4>

                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }
}