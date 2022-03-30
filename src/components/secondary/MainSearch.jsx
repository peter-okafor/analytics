import { Input, Tooltip } from "antd";
import styled from "styled-components";
import { SearchIcon } from "../primary/SearchIcon";

const StyledInput = styled(Input)`
  background-color: #FAFAFC;
  width: 441px;
  height: 54px;
  background: #FAFAFC;
  border-radius: 10px;
  input{
    background-color: #FAFAFC;
    ::placeholder{
      color: #A3A3C2;
    }
  }
`

const MainSearch = ({ ...props }) => {
  return <StyledInput
    placeholder="Ask us any question"
    suffix = {<Tooltip title="Search"><SearchIcon height={21} width={21} /></Tooltip>}
    {...props} 
  />;
}

export default MainSearch;