import './App.css'
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import Parametros from './components/basicos/Parametros';
import Filhos from './components/basicos/Filhos';
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';
import Gerador from './components/megasena/Gerador';

export default props =>
<div className='App'>
    <h1>Fundamentos React.JS</h1>
    <div className="Cards">
        <Card titulo='Exercicio - 1' color='#FF218C'>
            <Primeiro/>
        </Card>
        <Card titulo='Exercicio - 2' color='#FFD800'>
            <Parametros titulo='Titulo com parâmetro' subtitulo='Subtitulo com parâmetro'/>
        </Card>
        <Card titulo='Exercicio - 3' color='#21B1FF'>
            <Filhos>
                <ul>
                    <li>Filho um</li>
                    <li>Filho dois</li>
                </ul>
            </Filhos>
        </Card>
        <Card titulo='Exercicio - 4' color='#FF218C'>
            <Repeticao/>
        </Card>
        <Card titulo='Exercicio - 5' color='#FFD800'>
            <Condicional numero='5'/>
        </Card>
        <Card titulo='Exercicio - 6' color='#21B1FF'>
            <Pai sobrenome='Freitas'/>
        </Card>
        <Card titulo='Exercicio - 7' color='#FF218C'>
            <Super/>
        </Card>
        <Card titulo='Exercicio - 8' color='#FFD800'>
            <Input/>
        </Card>
        <Card titulo='Exercicio - 9' color='#21B1FF'>
            <Contador passo={10} valor={100}/>
        </Card>
        <Card titulo='Ultimo Exercicio' color='#e84a5f'>
            <Gerador qtnum={6}/>
        </Card>
    </div>
</div>