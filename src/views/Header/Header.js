import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import SearchBox from '../../components/SearchBox'
import LoadingModal from '../../components/LoadingModal'

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
    if (!_.isEmpty(text)) {
      searchActions.searchEntities(text)
    } else {
      searchActions.clearResults()
    }
  }

  mapEntitiesToSearchObj (entities) {
    const orgsKeyMapping = { name: 'title', type: 'subtitle', city: 'info' }
    const contactsKeyMapping = { full_name: 'title', org_name: 'subtitle', city: 'info', avatar: 'avatar'}
    const groupsKeyMapping = { name: 'title', city: 'info' }
    let result = JSON.parse(JSON.stringify(entities))

    result.orgs.data = this.mapEntity({ entityData: result.orgs.data, mapping: orgsKeyMapping })
    result.contacts.data = this.mapEntity({ entityData: result.contacts.data, mapping: contactsKeyMapping })
    result.groups.data = this.mapEntity({ entityData: result.groups.data, mapping: groupsKeyMapping })
    return result
  }

  mapEntity ({ entityData, mapping }) {
    return _.map(entityData, e => (_.mapKeys(e, (v, k) => (mapping[k]))))
  }

  render () {
    const { entities, isLoading, isExpanded } = this.props
    const searchResult = !_.isEmpty(entities) ? this.mapEntitiesToSearchObj(entities) : {}

    return (
      <StyledWrapper>
        <LoadingModal isLoading={isLoading} />
        <StyledLogo alt="Logo" src="/assets/campai_logo.svg" />
        <SearchBox isExpanded={isExpanded} entities={searchResult} onChangeSearchText={e => this.onChangeSearchText(e.target.value)} />
        {/* Dummy */}
        <span>Startseite</span>
        <span><span style={{color:'#ca3670'}}>14</span> Benachrichrigungen</span>
        <span>> Diego Maia</span>
      </StyledWrapper>
    )
  }
}
