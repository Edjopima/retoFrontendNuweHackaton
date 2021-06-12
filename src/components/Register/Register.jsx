import React, { useState } from 'react';
import StyledRegister from './StyledRegister';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import RegisterOptionSelect from '../RegisterOptionSelect/RegisterOptionSelect';

const Register = () => {  
  const [step, setStep] = useState(0);
  const nextStep = () => {
    if (step === 3) {
      return
    } 
    setStep(step+1);
  }

  const prevStep = () => {
    if (step === 0) {
      return
    } 
    setStep(step-1);
  }

  const steps = [
    {number:0,text:'Home', page:<RegisterOptionSelect nextStep={()=>nextStep()} prevStep={()=>prevStep()} />},
    {number:1,text:'Personal Info.',page:<StepOne nextStep={()=>nextStep()} />},
    {number:2,text:'Localización',page:<StepTwo nextStep={()=>nextStep()} />},
    {number:3,text:'Verificación por tarjeta',page:<StepThree nextStep={()=>nextStep()} />},
  ];

  return (    
    (step === 0) ? 
      steps[0].page
      :
      <StyledRegister>
      <div className="header">
        <div className="back-button" onClick={()=>prevStep()}>
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.86251 2.225L8.37918 0.75L0.137512 9L8.38751 17.25L9.86251 15.775L3.08751 9L9.86251 2.225Z" fill="#8692A6"/>
          </svg>
          <span>Volver</span>
        </div>
        <div className="step-box">
          <span>PASO 0{steps[step].number}/03</span>
          <strong>{steps[step].text}</strong>
        </div>
      </div>
      {steps[step].page}
    </StyledRegister>

  );
}

export default Register;