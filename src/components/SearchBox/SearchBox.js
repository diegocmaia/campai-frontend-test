import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import SearchList from './SearchList'

const StyledWrapper = styled.div`
  height: 60%;
  width: 30%;
  color: #000000;
`

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 16px;
  border: 1px solid #aaa;
  background-color: #ffffff;
  background-image: url('/assets/search-icon.png');
  background-repeat: no-repeat;
  background-position: right 5px center;
  background-size: 20px;
  padding-left: 10px;
  padding-right: 45px;
`

const StyledResultBox = styled.div`
  position: absolute;
  width: 40%;
  height: 30vw;
  margin-top: 0.6vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #ffffff;
  overflow: scroll;
`

const SearchBox = ({ entities, onChangeSearchText }) => (
  <StyledWrapper>
    <StyledInput onChange={onChangeSearchText}></StyledInput>
    <StyledResultBox>
      {
        !_.isEmpty(entities)
        ? <div>
            <SearchList title="Orgs" items={entities.orgs}></SearchList>
            <SearchList title="Contacts" items={entities.contacts}></SearchList>
            <SearchList title="Groups" items={entities.groups}></SearchList>
          </div>
        : null
      }
    </StyledResultBox>
  </StyledWrapper>
)

SearchBox.propTypes = {
  entities: PropTypes.object,
  onChangeSearchText: PropTypes.func.isRequired
}

export default SearchBox
