import React from 'react';
import StyledModal from './StyledModal';

const Modal = ({closeModal, content}) => {
  const modalTypes = {
    emailError: <div className="modal">
      <h1>¡Ups, algo ha ido mal!</h1>
      <p>Parece que el correo electrónico introducido ya está en uso. Por favor, revísalo y vuelve a intentarlo de nuevo.</p>
      <button onClick={()=>closeModal()}>Cerrar</button>
    </div>,
    success:
    <div className="modal">
      <h1>¡Todo guay!</h1>
      <p>Tu cuenta se ha creado correctamente</p>
      <div className="button-container">
        <button onClick={()=>closeModal()}>Cerrar</button>
        <a href="https://nuwe.io/"><button onClick={()=>closeModal()} className='button2'>Vamos para Nuwe</button></a>
      </div>
    </div>,
    notFound:
    <div className="modal">
      <h1>Aun no Amigo</h1>
      <p>La accion que tratas de hacer aun no esta disponible, quedate atento a futuras actualizaciones.</p>
      <button onClick={()=>closeModal()}>Cerrar</button>
    </div>,
  }
  return (
    <StyledModal>
      {modalTypes[content]}
    </StyledModal>
  );
}

export default Modal;