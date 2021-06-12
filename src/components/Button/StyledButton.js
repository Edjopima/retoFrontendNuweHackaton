import styled from 'styled-components'

const StyledButton = styled.button`
  width: 426px;
  height: 54px;
  background-color: ${props=>props.case==='primary'? '#4F934A': 'white'};
  border-radius: 6px;
  color:${props=>props.case==='primary'? 'white': 'black'};
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  ${props=>props.case==='primary'? '': 'box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.08);'}
  border-color:white;
  margin-bottom:2px;
  display:flex;
  align-items:center;
  ${props=>props.case==='primary'? 'justify-content:center;': ''}
`;

export default StyledButton;