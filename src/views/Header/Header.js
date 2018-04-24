import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import SearchBox from '../../components/SearchBox'

const StyledWrapper = styled.div`
  display:flex;
  height: 3vw;
  justify-content: space-around;
  align-items: center;
  background-color: #515151;
  color: #ffffff;
`

const StyledLogo = styled.img`
  height: 70%;
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

  mapEntitiesToSearchObj (entities) {
    const orgsKeyMapping = { name: 'title', type: 'subtitle', city: 'info' }
    const contactsKeyMapping = { full_name: 'title', org_name: 'subtitle', city: 'info', avatar: 'avatar'}
    const groupsKeyMapping = { name: 'title', city: 'info' }

    entities.orgs.data = this.mapEntity({ entityData: entities.orgs.data, mapping: orgsKeyMapping })
    entities.contacts.data = this.mapEntity({ entityData: entities.contacts.data, mapping: contactsKeyMapping })
    entities.groups.data = this.mapEntity({ entityData: entities.groups.data, mapping: groupsKeyMapping })
    return entities
  }

  mapEntity ({ entityData, mapping }) {
    return _.map(entityData, e => (_.mapKeys(e, (v, k) => (mapping[k]))))
  }

  render () {
    const { entities } = this.props
    const searchResult = !_.isEmpty(entities) ? this.mapEntitiesToSearchObj(entities) : {}

    return (
      <StyledWrapper>
        <StyledLogo alt="Logo" src="/assets/campai_logo.svg" />
        <SearchBox entities={searchResult} onChangeSearchText={e => this.onChangeSearchText(e.target.value)} />
        {/* Dummy */}
        <span>Startseite</span>
        <span><span style={{color:'#ca3670'}}>14</span> Benachrichrigungen</span>
        <span>> Diego Maia</span>
      </StyledWrapper>
    )
  }
}
