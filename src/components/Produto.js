import React from 'react';
import style from './../styles/components/Produto.module.css'

export default function Produto(props){
    return(
        <div class={style.produto}>
            <h3>{props.title}</h3>
            <p>{props.emote}</p>
            <p>{props.description}</p>
            <h4>{props.price} galeões</h4>
            <a href={"https://api.whatsapp.com/send?phone=55"+props.numero+"&text=Ola%2C%20estou%20interessado(a)%20no%20produto%3A%20"+props.title.replace(/ /g, '%20')}>Quero um</a>
        </div>
    )
}