import styled from 'styled-components'

const StyledBigButton = styled.div`
  .container {
    width:426px;
    height:108px;
    border-radius: 6px;
    cursor:pointer;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-bottom:28px;
  }

  .primary {
    box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.04);
    border:solid 1px #4F934A;
    background-color:#F5F9FF;
  }

  .secondary{
    box-shadow: 0px 2px 14px 1px rgba(0, 0, 0, 0.06);
  }

  .icon-container {
    background-image: url(${props => props.iconBackground});
    background-repeat: no-repeat;
    width:${props => props.type === 'primary'?'56px':'52px'};
    height:56px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:28px;
  }
  .icon{
    width:18px;
    height:18px;
  }
  .title {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
  .message{
    width:264px;
    heigh:34px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color:#8692A6;
    ${props => props.type === 'primary'?'':'margin-right:79px;'}
  }
  .arrow {
    ${props => props.type === 'primary'?'':'display:none;'}
    color:#4F934A;
    margin-right:36px;
  }
  @media only screen and (max-width: 950px) {
    .container{
      width:380px;
    }
    .icon-container{
      width:66px;
    }
    .icon{
      display:none;
    }
  }
`;

export default StyledBigButton;