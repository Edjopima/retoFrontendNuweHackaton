import styled from 'styled-components'

const StyledLeftBox = styled.div`
  height:100vh;
  width:50%;
  background-image: url(${props=>props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  .color-box {
    height: 100%;
    width : 100%;
    background-color:rgba(86, 155, 81, 0.9);
    display: flex;
    justify-content:center;
    align-items: center;
  }
  .content {
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items: center;
    color: white;
    font-size:20px;
    height: 22rem;
    width:70%;
  }
  .description {
    line-height: 38px;
    font-weight:400;
  }
  .quotes {
    align-self: flex-start;
  }
  .corner{
    align-self: flex-end;
  }
  @media only screen and (max-width: 950px) {
    display:none;
  }
`;

export default StyledLeftBox;