import React, { useState } from 'react';
import StyledRegister from './StyledRegister';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import RegisterOptionSelect from '../RegisterOptionSelect/RegisterOptionSelect';
import Modal from '../Modal/Modal';

const Register = () => {  
  const initialState = {
    name:'',
    email:'',
    password:'',
    phoneNumber:'',
    address:'',
    country:'',
    creditCard:'',
    cardCode:'',
    checked:false
  }
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(initialState)
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState('notFound')
  const closeModal = () => {
    if (modalContent==='success'){
      setStep(0);
      setValues(initialState)
    }
    setOpenModal(false);
  }
  const handleOpenModal = (content) => {
    setModalContent(content);
    setOpenModal(true)
  }

  const nextStep = () => {
    if (step === 3) {
      handleOpenModal('success');
      return
    } 
    setStep(step+1);
  }

  const prevStep = () => {
    if (step === 0) {
      return
    }
    if (step === 1){
      setValues(initialState)
      setStep(step-1);
      return
    }
    setStep(step-1);
  }


  const steps = [
    {
      number:0,
      text:'Home', 
      page:<RegisterOptionSelect nextStep={()=>nextStep()} prevStep={()=>prevStep()} handleOpenModal={handleOpenModal} />
    },
    {
      number:1,
      text:'Personal Info.',
      page:<StepOne nextStep={()=>nextStep()} values={values} setValues={setValues} handleOpenModal={handleOpenModal}/>
    },
    {
      number:2,
      text:'Localización',
      page:<StepTwo nextStep={()=>nextStep()} values={values} setValues={setValues} />
    },
    {
      number:3,
      text:'Verificación por tarjeta',
      page:<StepThree nextStep={()=>nextStep()} values={values} setValues={setValues} handleOpenModal={handleOpenModal}/>},
  ];

  return (    
    <>
{      (step === 0) ? 
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
    </StyledRegister>}
    {openModal?<Modal closeModal={closeModal} content={modalContent}/> :''}
    </>
  );
}

export default Register;