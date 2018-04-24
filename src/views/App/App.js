import React from 'react'
import styled from 'styled-components'

import Header from '../../containers/Header'

const StyledAppContainer = styled.div`
  height: 100em;
`

const StyledMainContent = styled.div`
  height: 97vw;
  background-color: #f6f5f6;
`

export default class App extends React.Component {
  render () {
    return (
      <StyledAppContainer>
        <Header />
        <StyledMainContent />
      </StyledAppContainer>
    )
  }
}
