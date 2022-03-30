import styled from "styled-components";
import { ProfileImage } from "../primary";

const StyledDiv = styled.div`
  width: 221px;
  height: 60px;
  padding-left: 16px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  background-color: white;
  border: 1px solid #ECEBF5;
  box-sizing: border-box;
  border-radius: 8px;

  .maincontent {
    width: 170px;
    height: 37px;
    align-items: center;
    display: flex;
    justify-content: space-between;

    .textcontent {
      width: 129px;
      height: 37px;
      display: flex;
      flex-direction: column;

      .company {
        font-style: normal;
        font-size: 14px;
        line-height: 19px;
        margin-bottom: 0;
    
        display: flex;
        align-items: center;
    
        color: #060213;
      }
  
      .usermail {
        width: 129px;
        height: 20px;
    
        font-family: 'Gelion';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
    
        display: flex;
        align-items: center;
    
        color: #696D8C;
      }
    }
  }
`

const ProfileCard = ({
  companyName,
  userMail
}) => (
  <StyledDiv>
    <div className="maincontent">
      <ProfileImage />
      <div className="textcontent">
        <h2 className="company">{companyName}</h2>
        <p className="usermail">{userMail}</p>
      </div>
    </div>
  </StyledDiv>
)

export default ProfileCard