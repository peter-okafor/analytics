import { Input } from "antd";
import styled from "styled-components";
import { SearchIcon } from "../primary/SearchIcon";

const StyledInput = styled(Input)`
  width: 350px;
  height: 44px;

  background: #FFFFFF;

  border: 1px solid #E1E1EB;
  box-sizing: border-box;
  border-radius: 8px;

  padding: 10px 16px 10px 16px;

  input::placeholder {
    font-family: 'Gelion';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #A3A3C2;
  }

  .ant-input-prefix {
    margin-right: 16px;
  }
`

const SearchInput = ({...props}) => {
  return (
    <StyledInput
      placeholder="Search"
      prefix={<SearchIcon icon="search" height={16} width={16} />}
      {...props} 
    />
  )
}

export default SearchInput;