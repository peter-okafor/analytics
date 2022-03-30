import styled from "styled-components"

const StyledDiv = styled.div`
  width: 187px;
  height: 116px;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #FAFAFA;

  border: 1px solid #ECEBF5;
  box-sizing: border-box;
  border-radius: 10px;

  .title {
    width: 141px;
    height: 22px;
    
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    
    color: #696D8C;
  }
  
  .value {
    height: 32px;
    margin-top: 8px;
    margin-bottom: 0;

    font-family: 'Gelion';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;

    color: #060213;

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`
const TimeCard = ({ title, value }) => {
  return (
    <StyledDiv>
      <p className="title">{title}</p>
      <h3 className="value">{value}</h3>
    </StyledDiv>
  )
}

export default TimeCard