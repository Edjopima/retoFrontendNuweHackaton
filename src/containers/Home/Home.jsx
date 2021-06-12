import React from 'react';
import LeftBox from '@components/LeftBox/LeftBox'
import StyledHome from './StyledHome'
import BigButton from '@components/BigButton/BigButton';
import userIcon from '@icons/user.png'
import polygon from '@icons/Polygon 3-1.png'
import briefcase from '@icons/briefcase.png'
import polygon2 from '@icons/Polygon 3.png'

const Home = () => {
  return (
    <StyledHome>
      <LeftBox />
      <div className="content-container">
        <p className='header'>Ya tienes cuenta? <strong>Inicia sesión</strong></p>
        <div className="center-box">
          <h1 className='title'>¡Únete a la comunidad!</h1>
          <p className="subtitle">Para empezar, dinos que cuenta te gustaría abrir.</p>
          <BigButton 
            icon={userIcon}
            iconBackground={polygon}
            title='Developers'
            message='Cuenta personas para entrar en el mundo dev'
            type='primary'
          />
          <BigButton 
            icon={briefcase}
            iconBackground={polygon2}
            title='Business'
            message='Tienes o perteneces a una compañía'
            type='secondary'
          />
        </div>
      </div>
    </StyledHome>
  );
}

export default Home;