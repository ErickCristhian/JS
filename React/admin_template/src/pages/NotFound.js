import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import NotFoundAnimation from '../assets/404';

export default function NotFound(){
    const bodyMovinOptions = {
        loop: true,
        autoplay: true,
        prerender: true,
        animationData: NotFoundAnimation
    };

    return (
        <div>
            <div>
                <Lottie options={bodyMovinOptions} height={400} width={400}/>
            </div>
            
            <div>
                <h1>Não encontrada</h1>
                <Link to="/">To Home</Link>
            </div>
        </div>
    );
}