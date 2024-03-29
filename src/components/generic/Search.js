import React from 'react';
import {FlexRow, Svg} from '../../utils/containers';
import loopIco from '../../assets/loop_ico.svg';
import filtersIco from '../../assets/filters_ico.svg';
import styled from 'styled-components';
import {Body} from '../../utils/fonts';
import PropsTypes from 'prop-types';

const SearchStyle = styled(FlexRow)`
  width: 100%;
  height: 44px;
  border-radius: 22px;
  box-shadow: ${({theme}) => theme.shadow};
  padding: 0 12px;

  div {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }

  button {
    cursor: pointer;
    margin-left: 12px;
    width: 14px;
    height: 20px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.25);
    }
  }

  input {
    width: calc(100% - 24px - 34px);
    color: ${({theme}) => theme.colors.dark08};
  }
`;

const Search = (props) => {
    return (
        <SearchStyle>
            <Svg src={loopIco}/>
            <Body as='input' onChange={(event) => props.searchQueryHandler(event)}/>
            <Svg as='button' src={filtersIco} onClick={props.toggleFiltersMenu}
                 display={props.filterButton ? 'block' : 'none'}/>
        </SearchStyle>
    );
};

Search.propTypes = {
    searchQueryHandler: PropsTypes.func,
    toggleFiltersMenu: PropsTypes.func,
    filterButton: PropsTypes.bool
};

Search.defaultProps = {
    searchQueryHandler: null,
    toggleFiltersMenu: null,
    filterButton: false,
};

export default Search;