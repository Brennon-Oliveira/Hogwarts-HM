import React from 'react';
import Produto from '../Produto';
import style from './../../styles/components/gemialidadeWeasley/TabelaPrecos.module.css'

export default (props)=>{

    var produtos = [
        {title:'Orelhas extensíveis',emote:'👂🏻',price:"400",description:"Esse produto poderá ser utilizado para você visitar uma comunal por 1 hora"},
        {title:'Caramelos incha-língua',emote:'👅',price:'150',description:'Poderá ser enviado para as outras comunais e a comunal deverá falar por 20 minutos com emoji de língua'},
        {title:'Pena resposta-Esperta',emote:'✅',price:'900',description:'Cada comunal só poderá adquirir uma dessa na semana, e ela poderá ser usada nos jogos de tabuleiro para conseguir um item com pontuação positiva'},
        {title:'Fogos Espontâneos',emote:'🧨',price:'160',description:'Você pode incendiar alguém ou comunal, o efeito dele é que a pessoa só pode escrever pedindo socorro. Pode ser apagado depois de 10 minutos com o feitiço Aguamenti'},
        {title:'Cremes de canário',emote:'🐥',price:'450',description:'Ao receber deve-se digitar "piu"  no intervalo de todas as palavras que for escrever, durante 10 minutos'},
        {title:'Vomitilhas',emote:'🤮',price:'125',description:'Você recebeu um doce estragado e deu ruim no seu estômago, você fica 10 minutos vomitando, enquanto isso só poderá escrever usando o emoji'},
        {title:'Pântano Portátil',emote:'🧫',price:'500',description:'Você foi atingido, fique sem enviar mensagem na comunal por 20 minutos para se limpar. Caso seja jogado na comunal ela fica fechada para limpeza. Porém poderá falar nos demais grupos. Obs: só poderá ser jogado 1 por vez na comunal ou no aluno.'},
        {title:'Poção do amor',emote:'⚗️ ',price:'235',description:'A pessoa que receber a poção deve mandar o brasão da comunal de quem enviou de 5 em 5 minutos durante o período de 30 minutos'},
        {title:'Chapéu-Escudo individual',emote:'🎩',price:'320',description:'Você está com febre e começa delirar.Agora só pode digitar trocando a letra R por L durante 30 minutos'},
        {title:'Chapéu-Escudo comunal',emote:'👒',price:'600',description:'Só pode ser comprado um item por aluno. Ele te protege de receber qualquer ataque durante 20 minutos'},
        {title:'Febricolate',emote:'🍫',price:'150',description:'Poderá ser utilizado como proteção, mas poderá ser comprado apenas 2 por comunal na semana com o efeito de 1 hora sem receber prenda a casa receber prenda'},
        {title:'Diabinhos de pimenta',emote:'🌶️',price:'275',description:'É difícil falar com a boca ardendo, diga apenas sim ou não durante 10 minutos'},
        {title:'Ratinhos de Sorvete',emote:'🍨',price:'100',description:'Doces que fazem os dentes do consumidor "vibrarem e rangerem." Escreva errado durante 15 minutos'},
        {title:'Varinhas de imitação',emote:'💥',price:'280',description:'Explodem quando o bruxo tenta fazer algum feitiço, escreva em CAPS e com o Emoji 💥 no lugar da letra "O" durante 15 minutos'},
        {title:'Telescópico Esmurrador',emote:'🥊',price:'140',description:'Você levou um murro e seu olho ficou roxo, escreva com o emoji 💜 no começo e no fim de cada frase durante 10 minutos'},
        {title:'Whisky de Fogo',emote:'🥃',price:'300',description:'Essa bebida é muito forte, você está enxergando tudo em dobro, escreva duplicando as letras durante 25 minutos'},
    ]

    var mostrar = [];
    for(let i = 0; i < produtos.length; i++){
        mostrar.push(<Produto title={produtos[i].title} emote={produtos[i].emote} price={produtos[i].price} description={produtos[i].description} />);
        console.log(i)
    }

    return(
        <section class={style.tabelaPrecos}>
            <div className="container">
                <h2 class="title">Tabela de preços das Gemialidades Weasley</h2>
                <div>
                    {mostrar}
                </div>
            </div>
        </section>
    )
}