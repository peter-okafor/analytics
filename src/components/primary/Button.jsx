import { Button as AButton } from "antd";
import styled from "styled-components";

const Button = styled(AButton)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;

  width: 105px;
  height: 44px;

  background: #25BB87;
  border-radius: 8px;
  border: none;

  font-family: 'Gelion';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #FFFFFF;

  :hover, :active, :focus {
    outline: 0;
    box-shadow: none;
    text-decoration: none;
    background: #fff;
    color: #25BB87;
    border-color: #25BB87;
  }
`;

export default Button;