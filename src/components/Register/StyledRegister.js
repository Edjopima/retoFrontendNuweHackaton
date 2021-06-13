import styled from 'styled-components'

const StyledRegister = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:50%;
  .header {
    width:85%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-start;
    color: #BDBDBD;
    margin:40px 82px;
  }
  strong{
    color: #8692A6;
    font-size:16px;
  }
  .back-button{
    display:flex;
    align-items:center;
    justify-content:center;
    color: #8692A6;
    cursor:pointer;
    font-size:16px;
    font-weight: 600;
  }
  .back-button span {
    margin-left:14px
  }
  .step-box{
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    font-size:14px;
  }
  .form-container{
    diplay:flex;
    flex-direction:column;
    width:426px;
  }
  form {
    display:flex;
    flex-direction:column;
  }
  .title{
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    margin-bottom:10px;
  }
  .subtitle{
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color: #8692A6;
    margin-bottom:18px;
  }
  .input{
    width: 366px;
    height: 10px;
    border: 1px solid #8692A6;
    border-radius:6px;
    padding:20px 30px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #494949;
    outline:none;
    margin-bottom:10px;
  }
  form p{
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #696F79;
    margin-bottom:14px;
  }
  .separator{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    font-size: 12px;
    line-height: 15px;
    color: #BABABA;
    align-self:center;
    width:100%;
    margin-bottom:20px;
  }
  .separator div {
    width:172px;
    border: 1px solid #F5F5F5;
  }
  .checkmark{
    margin-bottom:20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #696F79;
    display:flex;
    align-items:center;
  }
  .checkmark input{
    margin-right:16px;
    width:17px;
    height:17px;
    border-radius:6px;
  }
  .checkmark input:checked {
    background-color: #4F934A;
  }

  .number-input{
    width: 396px;
    height: 10px;
    border: 1px solid #8692A6;
    border-radius:6px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #494949;
    outline:none;
    margin-bottom:10px;
    padding-top:20px;
    padding-bottom:20px;
    display:flex;
    align-items:center;
    padding-left:30px;
  }
  .phonenumber-input {
    border:none;
  }
  .flag-selector{
    border:none;
    background:white;
  }


  .footer{
    margin-top:30px;
    width:100%;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #8692A6;
    text-align: center;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .footer svg{
    padding-right:16px;
  }

  @media only screen and (max-width: 950px) {
    width:100%;
    .header{
      margin-bottom:80px;
    }
  }
  .select{
    width: 100%;
    height: 52px;
    border: 1px solid #8692A6;
    border-radius:6px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #494949;
    outline:none;
    margin-bottom:10px;
    background:white;
    padding:0 30px;
  }
`;

export default StyledRegister;