import React from 'react';
import style from './../../styles/components/home/Banner.module.css';
import { Link } from 'react-router-dom';

export default function Banner(props){
    return(
        <section class={style.banner}>
            <div class={style.overlay}><p>a</p></div>
            <div class={style.container + ' container'}>
                <div>
                    <p>Os senhores Aluado, Rabicho , Almofadinhas e Pontas tem o prazer em convidá-los para a Escola de Magia e Bruxaria de Hogwarts, aonde irão aprender inúmeras pegadinhas, feitiços, azarações e muito mais.</p>
                    <Link to="/gemialidadeweasley">Ver a Gemialidade Weasley</Link>
                </div>
            </div>
        </section>
    )
}