import React, { useState } from 'react';
import StyledButton from '../Button/StyledButton';
import google from '@icons/flat-color-icons_google.png'

const StepOne = ({nextStep,values,setValues, handleOpenModal}) => {
  const [name, setName] = useState(values.name)
  const [email, setEmail] = useState(values.email)
  const [password, setPassword] = useState(values.password)
  const [checked, setChecked] = useState(values.checked)

  const submit = () =>{
    if (email==='pruebaerror@gmail.com'){
      handleOpenModal('emailError');
      return
    }
    if (!name || !email || !password || !checked ){
      return
    }
    setValues({...values,name,email,password,checked})
    nextStep();
  }


  return (
    <div className="form-container">
      <h1 className="title">Registra tu cuenta individual</h1>
      <p className="subtitle">
      Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información
      </p>
      <form onSubmit={()=>submit()}>
        <label>
          <p>Nombre completo*</p>
          <input type="text" className='input' placeholder='Ingresa tu nombre' value={name} onChange={(event)=>setName(event.target.value)}/>
        </label>
        <label>
          <p>Correo Electrónico*</p>
          <input type="email" className='input' placeholder='Ingresa tu correo electronico' value={email} onChange={(event)=>setEmail(event.target.value)}/>
        </label>
        <label>
          <p>Contraseña*</p>
          <input type="password" className='input' placeholder='Ingresa una contraseña' value={password} onChange={(event)=>setPassword(event.target.value)}/>
        </label>
        <label className='checkmark'>
          <input type="checkbox"  value={checked} onChange={(event)=>setChecked(event.target.value)}/> Acepto los térmicos y condiciones
        </label>
      </form>
      <StyledButton case="primary" onClick={()=>submit()}>Registrar Cuenta</StyledButton>

      <div className="separator">
          <div></div>
          O
          <div></div>
        </div>
        <StyledButton case="google" onClick={() => handleOpenModal('notFound')}>
          <img src={google} alt="google" className='google'/>
          Registrate con Google
        </StyledButton>
    </div>
  );
}

export default StepOne;