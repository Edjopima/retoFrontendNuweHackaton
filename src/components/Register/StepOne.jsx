import React from 'react';
import StyledButton from '../Button/StyledButton';
import google from '@icons/flat-color-icons_google.png'

const StepOne = ({nextStep}) => {
  return (
    <div className="form-container">
      <h1 className="title">Registra tu cuenta individual</h1>
      <p className="subtitle">
      Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información
      </p>
      <form>
        <label>
          <p>Nombre completo*</p>
          <input type="text" className='input' placeholder='Ingresa tu nombre' />
        </label>
        <label>
          <p>Correo Electrónico*</p>
          <input type="email" className='input' placeholder='Ingresa tu correo electronico' />
        </label>
        <label>
          <p>Contraseña*</p>
          <input type="password" className='input' placeholder='Ingresa una contraseña' />
        </label>
        <label className='checkmark'>
          <input type="checkbox"  value="acceptConditions"/> Acepto los térmicos y condiciones
        </label>
      </form>
      <StyledButton case="primary" onClick={nextStep}>Registrar Cuenta</StyledButton>
        <div className="separator">
          <div></div>
          O
          <div></div>
        </div>
        <StyledButton case="google">
          <img src={google} alt="google" style={{marginRight:'63px',marginLeft:'45px'}}/>
          Registrate con Google
        </StyledButton>
    </div>
  );
}

export default StepOne;