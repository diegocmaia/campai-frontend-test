import React from 'react'
import styled from 'styled-components'

import SearchBox from '../../components/SearchBox'

const StyledWrapper = styled.div`
  display:flex;
  justify-content: space-between
`

export default class Header extends React.Component {
  render () {
    return (
      <StyledWrapper>
        <img class="logo" alt="Logo" src="/assets/campai_logo.svg" />
        <SearchBox />
        <span>Startseite</span>
        <span>Benachrichrigungen</span>
        <span>Diego Maia</span>
      </StyledWrapper>
    )
  }
}
