import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import SearchItem from './SearchItem'

const StyledWrapper = styled.div`
  display: ${props => props.isVisible ? 'flex' : 'none'};
  flex-direction: column;
`

const StyledTitle = styled.div`
  display: flex;
  padding-left: 10px;
  font-size: 120%;
  height: 2vw;
  align-items: center;
`

const StyledFooter = styled.div`
  cursor: pointer;
  padding-left: 10px;

  &:hover {
    background-color: #f6f5f6;
  }
`

const StyledFooterText = styled.span`
  padding-left: 20px;
  font-size: 110%;
  font-style: italic;
  color: #ababab;
`

const SearchList = ({ title, isVisible, items }) => {
  return (
    <StyledWrapper isVisible={isVisible}>
      <StyledTitle>{title}</StyledTitle>
      {
        _.map(items.data, (item, key) => (
          <SearchItem key={item.title} hasAvatar={!_.isEmpty(item.avatar)} item={item} />
        ))
      }
      {
        items.info.limit < items.info.total
        ? <StyledFooter>
          <StyledFooterText>Show all {items.info.total} results...</StyledFooterText>
        </StyledFooter>
        : null
      }
    </StyledWrapper>
  )
}

SearchList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.object
}

export default SearchList
