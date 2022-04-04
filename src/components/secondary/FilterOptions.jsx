import { Select as ASelect } from 'antd';
import styled from 'styled-components';
import { Icon } from '../primary/Icon';

const { Option } = ASelect;

const Select = styled(ASelect)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 160px;
  height: 44px;

  box-sizing: border-box;
  
  &&& .ant-select-selector, &&& .ant-select-selection-search-input {
    height: 44px;
    border-radius: 8px;
    border: 1px solid #E1E1EB;
    padding: 10px 16px;
  }

  &&& .ant-select-selection-placeholder {
    display: inline-flex;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #060213;
  }

  &&& .ant-select-arrow {
    right: 16px;
    width: 16px;
    height: 16px;
    color: #060213;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const FilterOptions = ({
  filterOptions = [],
  ...props
}) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  return (
    <Select
      placeholder="Filter Options"
      onChange={handleChange}
      suffixIcon={<Icon icon="down" height={16} width={16} />}
      {...props}
    >
      {filterOptions.map(option => {
        return <Option value={option.value}>{option.label}</Option>
      })}
    </Select>
  )
}

export default FilterOptions;