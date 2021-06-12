import React from 'react';
import StyledBigButton from './StyledBigButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const BigButton = (props) => {
  const { icon,title,message,iconBackground,type, nextStep} = props;
  return (
    <StyledBigButton iconBackground={iconBackground} type={type} onClick={nextStep}>
      <div className={`container ${type}`} >
        <div className="icon-container">
          <img src={icon} alt="icon" className="icon" />
        </div>
        <div className="content">
          <p className="title">{title}</p>
          <span className="message">{message}</span>
        </div>
        <FontAwesomeIcon icon={faArrowRight} className='arrow'/>
      </div>
    </StyledBigButton>
  );
}

export default BigButton;