import React from 'react';
import style from './../../styles/components/home/Sobre.module.css';

export default (props)=>{
    return(
        <section class={style.sobre}>
            <div class={style.container + ' container'}>
                <h2 class="title">Sobre o RPG</h2>
                <div class={style.itensContainer} >
                    <div class={style.itemBox}>
                        <h3>No nosso RPG teremos:</h3>
                        <ul>
                            <li>Jogos ♟️</li>
                            <li>Perguntas Relâmpago⚡</li>
                            <li>Aulas 📚</li>
                            <li>Enigmas 🎭</li>
                            <li>Cinema 🎬 </li>
                            <li>Profeta Diário 📜 </li>
                        </ul>
                    </div>
                    <div class={style.itemBox}>
                        <p>E muito mais, então está esperando o que?<br />
                        Embarque no Expresso de Hogwarts e venha participar dessa aventura conosco.<br />
                        Basta entrar no chapéu seletor e será selecionada para sua casa!!!</p>
                    </div>
                </div>
                <h4>Teremos um premio final, como se fosse a taca, daremos pros alunos que mais se desempenhar</h4>
            </div>
        </section>
    )
}