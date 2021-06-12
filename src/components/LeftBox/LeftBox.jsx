import React from 'react';
import StyledLeftBox from './StyledLeftBox';
import backgroundImage from '@images/Background.png'
import quotes from '../../assets/icons/quotes.png'
import corner from '../../assets/icons/Vector 2.png'

const LeftBox = () => {
  return (
    <StyledLeftBox backgroundImage={backgroundImage} >
      <div className="color-box">
        <div className="content">
          <img src={quotes} alt="quotes" className='quotes'/>
          <p className="description">
            Nuwe es la platforma que convierte el desarrollo profesional, 
            la búsquda de trabajo y la conexiones de personas y empresas en un juego. 
            Haciendo que puedas centrarte en lo que te gusta, programar, diseñar, crear, planear...
          </p>
          <img src={corner} alt="corner" className='corner'/>
        </div>
      </div>
    </StyledLeftBox>
  );
}

export default LeftBox;