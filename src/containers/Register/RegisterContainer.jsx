import React from 'react';
import Register from '../../components/Register/Register';
import LeftBox from '@components/LeftBox/LeftBox'

const RegisterContainer = () => {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      <LeftBox/>
      <Register/>
    </div>
  );
}

export default RegisterContainer;