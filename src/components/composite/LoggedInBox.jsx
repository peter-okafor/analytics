import styled from "styled-components";
import { RoundProfileImage } from "../primary";
import { Icon } from "../primary/Icon";
import { Notification } from "../secondary";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 11px 16px;

  width: 175px;
  height: 54px;

  border: 1px solid #ECEBF5;
  box-sizing: border-box;
  border-radius: 8px;

  .notification {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0px;

    width: 38px;
    height: 18px;

    .ant-badge-count {
      min-width: 16px;
      height: 16px;
      padding: 0;
      color: #fff;
      font-family: 'Gelion';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      white-space: nowrap;
      text-align: center;
      background: #ff4d4f;
      border-radius: 4px;
      box-shadow: 0 0 0 1px #fff;

      ..ant-scroll-number-only {
        height: 16px;
      }
    }
  }

  .divider {
    width: 1px;
    height: 24px;

    background: #ECEBF5;
  }

  .profile-image {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    width: 56px;
    height: 32px;
  }
`
// TODO: add popover for profile-image
const LoggedInBox = ({ numberOfNotifications }) => {
  return (
    <StyledDiv>
      <div className="notification">
        <Notification count={numberOfNotifications} />
      </div>
      <div className="divider"></div>
      <div className="profile-image">
        <RoundProfileImage />
        <Icon icon={'down'} width={16} height={16} block={true} style={{color: "#A3A3C2"}} />
      </div>
    </StyledDiv>
  )
}

export default LoggedInBox;