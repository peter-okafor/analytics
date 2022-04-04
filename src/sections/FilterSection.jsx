import styled from "styled-components"
import { Button, Divider, PageHeader } from "../components/primary";
import { FilterOptions, SearchInput } from "../components/secondary";

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  min-width: 1086px;
  align-items: center;

  .search-filter-export {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 671px;
    height: 44px;
    padding: 0;
    align-items: center;

    .search-filter {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 534px;
      height: 44px;
      padding: 0px;
    }
  }
`;

const FilterSection =  ({
  title,
}) => {
  return (
    <StyledSection>
      <PageHeader>
        {title}
      </PageHeader>
      <div className="search-filter-export">
        <div className="search-filter">
          <SearchInput />
          <FilterOptions />
        </div>
        <Divider height='30px' />
        <Button> Export </Button>
      </div>
    </StyledSection>
  ); 
}

export default FilterSection