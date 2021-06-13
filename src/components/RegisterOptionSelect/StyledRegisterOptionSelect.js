import styled from "styled-components";

const StyledRegisterOptionSelect = styled.div`
  height:100vh;
  width:50%;
  display: flex;
  flex-direction:column;
  align-items: center;

.header {
  align-self:flex-end;
  margin-top:70px;
  margin-right:80px;
  margin-bottom:135px;
  color:#8692A6;    
}
.header strong {
  color:#4F934A;
}
.title {
  margin-bottom:10px;
}
.subtitle {
  margin-bottom:35px;
  color:#8692A6;
}
@media only screen and (max-width: 950px) {
    width: 100%;
    padding-top:150px;
  .header {
    position:absolute;
    bottom:15%;
    margin:0;
    right:25%;
  }
}`;

export default StyledRegisterOptionSelect;