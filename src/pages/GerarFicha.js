import React, { useState } from 'react'
import style from '../styles/components/gerarFicha/GerarFicha.module.css';

export default function GerarFicha(props){

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState();
    const [indicacao, setIndicacao] = useState('');
    const [sangue] = useState(['Puro', 'Mestiço', 'Trouxa']);
    const [admin] = useState(['4298147309', '7488196181', '11952372455', '21988878444']);
    const [casa] = useState(['Stytherin', 'Ravenclaw', 'Hufflepuff', 'Gryffindor']);
    const [animal] = useState(['Sapo', 'Gato', 'Coruja', 'Rato', 'Furão']);

    function createLink(e){
        e.preventDefault();

        if(nome === '' || idade === '' || indicacao === ''){
            alert('Todos os campos devem ser preenchidos');
            return false;
        }

        var sangueId = document.getElementById('sangue').value;
        var casaId = document.getElementById('casa').value;
        var animalId = document.getElementById('animal').value;

        window.location.replace("https://api.whatsapp.com/send?phone=55"+admin[casaId]+"&text=Nome%3A%20"+nome.replace(/ /g, '%20')+"%20-%20Idade%3A%20"+idade+"%20-%20Indicado%20por%20quem%2Fonde%3A%20"+indicacao.replace(/ /g, '%20')+"%20-%20Tipo%20de%20Sangue%3A%20"+sangue[sangueId]+"%20-%20Casa%20Comunal%3A%20"+casa[casaId]+"%20-%20Animal%3A%20"+animal[animalId]);

    }

    return(
        <section className={style.gerarFicha}>
            <div className="container">
                <h2 className="title">Gerar Ficha</h2>
                <form onSubmit={e => createLink(e)}>

                    <div className={style.wrapper}>
                        <label for="nome">Nome:</label>
                        <input onChange={e => setNome(e.target.value)} type="text" name='nome' id="nome" value={nome} placeholder="ex: João da Silva"/>
                    </div>

                    <div className={style.wrapper}>
                        <label for="idade">Idade:</label>
                        <input onChange={e => setIdade(e.target.value)} type="number" name='idade' id="idade" value={idade} placeholder="ex: 17"/>
                    </div>

                    <div className={style.wrapper}>
                        <label for="indicado">Indicado por quem/onde?</label>
                        <input onChange={e => setIndicacao(e.target.value)} type="text" name='indicado' id="indicado" value={indicacao} placeholder="ex: WhatsApp"/>
                    </div>

                    <div className={style.wrapper}>
                        <label for="sangue">Tipo de sangue:</label>
                        <select id="sangue" name="sangue">
                            {
                                sangue.map((address, key) => <option key={key} value={key}>{address}</option>)
                            }
                        </select>
                    </div>

                    <div className={style.wrapper}>
                        <label for="casa">Casa comunal:</label>
                        <select id="casa" name="casa">
                            {
                                casa.map((address, key) => <option key={key} value={key}>{address}</option>)
                            }
                        </select>
                    </div>

                    <div className={style.wrapper}>
                        <label for="animal">Animal:</label>
                        <select id="animal" name="animal">
                            {
                                animal.map((address, key) => <option key={key} value={key}>{address}</option>)
                            }
                        </select>
                    </div>

                    <div className={style.wrapper + " "+style.wrapperSubmit}>
                        <button type='submit'>Enviar!</button>
                    </div>

                </form>
            </div>
        </section>
    )
}