import styled from "styled-components";

const Divider = styled.div`
  width: 1px;
  height: ${props => props.height || "24px"};

  background: #ECEBF5;
`;

export default Divider;