import styled from 'styled-components'

const StyledModal=styled.div`
  background:white;
  position:absolute;
  height:100%;
  width:100%;
  background-color:rgba(0,0,0,0.3);
  display:flex;
  align-items:center;
  justify-content:center;
  .modal{
    background:white;
    height:250px;
    width:706px;
    border-radius:16px;
    padding:40px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
  }
  h1{
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
  }
  p{
    font-weight: normal;
    font-size: 17px;
    line-height: 24px;
  }
  .button-container{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }
  button{
    width:200px;
    height:60px;
    background:white;
    border:1px solid black;
    border-radius:6px;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
  }
  .button2{
    color:white;
    background:black;
    width:380px;
    margin-right:80px;
  }
`

export default StyledModal;