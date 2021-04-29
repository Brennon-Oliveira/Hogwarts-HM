import React from 'react';
import style from './../styles/components/GemialidadeWeasleySobre.module.css'
import { Link } from 'react-router-dom';

export default function GemialidadeWeasleySobre(props){
    return(
        <section class={style.loja}>
            <div class={style.container + ' container'}>
                <h2 class="title">Gemialidade Weasley</h2>
                <p> A Gemialidade Weasley vai funcionar 1 vez na semana onde vocês poderão gastar seus galeões na lojinha.<br />
                Como ganho galeões? Simples, a cada atividade que você participar do rpg vocês ganhará galões.</p>
                <p> Você encontrará, artigos mágicos para aprontar com seus colegas e com as outras comunais. Para ativar o efeito basta falar com a Ali, Mandy ou Helloa</p>
                <ul>
                    <li>GAMES: 100</li>
                    <li>AULAS: 100</li>
                    <li>Mix: 200</li>
                </ul>
                <Link to="/gemialidadeweasley">⊰➛ Ver Tabela de preços das Gemialidades Weasley</Link>
            </div>
        </section>
    )
}