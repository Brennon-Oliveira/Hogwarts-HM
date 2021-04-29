import React from 'react';
import GemialidadeWeasleySobre from '../components/GemialidadeWeasleySobre';
import Banner from '../components/home/Banner';
import Sobre from '../components/home/Sobre';

export default function Home(props){
    return(
        <div>
            <Banner />
            <Sobre />
            <GemialidadeWeasleySobre />
        </div>
    )
}