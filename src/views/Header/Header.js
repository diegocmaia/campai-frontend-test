import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import SearchBox from '../../components/SearchBox'

const StyledWrapper = styled.div`
  display:flex;
  justify-content: space-between
`

export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.onChangeSearchText = _.debounce(this.onChangeSearchText.bind(this), 500)
  }

  onChangeSearchText (text, e) {
    const { searchActions } = this.props
    searchActions.searchEntities(text)
  }

  render () {
    const { entities } = this.props

    return (
      <StyledWrapper>
        <img alt="Logo" src="/assets/campai_logo.svg" />
        <SearchBox entities={entities} onChangeSearchText={e => this.onChangeSearchText(e.target.value)} />
        <span>Startseite</span>
        <span>Benachrichrigungen</span>
        <span>Diego Maia</span>
      </StyledWrapper>
    )
  }
}
