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

const StyledInfoText = styled.span`
  padding-top: 10px;
  padding-left: 20px;
  font-size: 110%;
  font-style: italic;
  color: #ababab;
`

const SearchBox = ({ entities, isExpanded, showError, onChangeSearchText }) => (
  <StyledWrapper>
    <StyledInput placeholder="Type for search..." onChange={onChangeSearchText}></StyledInput>
    {
      isExpanded
      ? <StyledResultBox>
          {
            !_.isEmpty(entities) && (!_.isEmpty(entities.orgs.data) || !_.isEmpty(entities.contacts.data) || !_.isEmpty(entities.groups.data))
            ? <div>
                <SearchList isVisible={!_.isEmpty(entities.orgs.data)} title="Orgs" items={entities.orgs}></SearchList>
                <SearchList isVisible={!_.isEmpty(entities.contacts.data)} title="Contacts" items={entities.contacts}></SearchList>
                <SearchList isVisible={!_.isEmpty(entities.groups.data)} title="Groups" items={entities.groups}></SearchList>
              </div>
            : <StyledInfoText>No results</StyledInfoText>
          }
        </StyledResultBox>
      : null
    }
  </StyledWrapper>
)

SearchBox.propTypes = {
  entities: PropTypes.object,
  isExpanded: PropTypes.bool.isRequired,
  showError: PropTypes.bool.isRequired, // We can use it to display an error message using a Notification Bubble
  onChangeSearchText: PropTypes.func.isRequired
}

export default SearchBox
