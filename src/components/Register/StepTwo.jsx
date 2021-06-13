import React from 'react';
import StyledButton from '../Button/StyledButton';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from 'react';
import useCountryList from '../../hooks/useCountryList';

const StepTwo = ({nextStep,values,setValues}) => {
  const countryList = useCountryList();
  const selectOptions = countryList.map((country,index)=><option key={index} value={country}>{country}</option>)

  const [number, setNumber] = useState(values.phoneNumber);
  const [address, setAddress] = useState(values.address);
  const [country,setCountry] = useState(values.country);

  const submit = () =>{
    if (!number || !address || !country){
      return
    }
    setValues({...values,phoneNumber:number,address,country})
    nextStep();
  }
  return (
    <div className="form-container">
    <h1 className="title">Complete Your Profile!</h1>
    <p className="subtitle">
    Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información
    </p>
    <form>
      <label>
        <p>Número de teléfono</p>
        <PhoneInput
          containerClass="number-input"
          buttonClass='flag-selector'
          inputClass='phonenumber-input'
          value={number}
          onChange={setNumber}/>      
        </label>
      <label>
        <p>Dirección</p>
        <input value={address} onChange={(event)=>setAddress(event.target.value)} type="email" className='input' placeholder='Ingresa una dirección completa' />
      </label>
      <label>
        <p>País de residencia</p>
        <select className='select' placeholder='Selecciona uno' value={country} onChange={(event)=>setCountry(event.target.value)}>
          <option value='' selected>Selecciona uno</option>
          {selectOptions.map((option)=>option)}
        </select>
      </label>
    </form>
    <StyledButton  case="primary" style={{marginTop:'52px'}} onClick={()=>submit()}>Guardar y continuar</StyledButton>
    <div className="footer">
      <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.91665 4.95833H8.49998C9.14165 4.95833 9.66665 5.48333 9.66665 6.125V11.9583C9.66665 12.6 9.14165 13.125 8.49998 13.125H1.49998C0.858313 13.125 0.333313 12.6 0.333313 11.9583V6.125C0.333313 5.48333 0.858313 4.95833 1.49998 4.95833H2.08331V3.79167C2.08331 2.18167 3.38998 0.875 4.99998 0.875C6.60998 0.875 7.91665 2.18167 7.91665 3.79167V4.95833ZM4.99998 2.04167C4.03165 2.04167 3.24998 2.82333 3.24998 3.79167V4.95833H6.74998V3.79167C6.74998 2.82333 5.96831 2.04167 4.99998 2.04167ZM1.49998 11.9583V6.125H8.49998V11.9583H1.49998ZM6.16665 9.04167C6.16665 9.68333 5.64165 10.2083 4.99998 10.2083C4.35831 10.2083 3.83331 9.68333 3.83331 9.04167C3.83331 8.4 4.35831 7.875 4.99998 7.875C5.64165 7.875 6.16665 8.4 6.16665 9.04167Z" fill="#8692A6"/>
      </svg>
      Tu información es segura
    </div>
  </div>
  );
}

export default StepTwo;