import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import SearchItem from './SearchItem'

const dataSel = {
  orgs: [{
    "name": "SV Bergisch Gladbach 09",
    "city": "Leidedorf",
    "type": "other"
  }],
  contacts: [{
    "full_name": "Milana Denner",
    "avatar": {
        "top_type": "LongHairBigHair",
        "eye_type": "Cry",
        "mouth_type": "Tongue",
        "skin_color": "Brown",
        "clothe_type": "ShirtScoopNeck",
        "eyebrow_type": "Default",
        "accessories_type": "Round"
    },
    "city": "Matternstadt",
    "org_name": "OSC Bremerhaven"
  },
  {
    "full_name": "Lavinia Schaefer",
    "avatar": {
        "top_type": "LongHairBob",
        "eye_type": "Hearts",
        "mouth_type": "Vomit",
        "skin_color": "Pale",
        "clothe_type": "CollarSweater",
        "eyebrow_type": "UnibrowNatural",
        "accessories_type": "Wayfarers"
    },
    "city": "Alexastadt",
    "org_name": "OSC Bremerhaven"
  }],
  groups: [{
    "name": "Kick - Niklaus",
    "city": "Sattelmaierdorf"
  },
  {
    "name": "Kahlert, Bak and Schlawitz",
    "city": "Dresslerstadt"
  }]
}

const StyledWrapper = styled.div`
  display: flex;
`
const StyledInput = styled.input`
  border-radius: 0 2px 2px 0;
  border-color: #ccd3e1;
`

const StyledSelector = styled.div`
  height: 100%;
  width: 16.20%;
  min-width: 188px;
  background-color: #8994a9;
  border: solid 1px #8994a9;
  border-radius: 2px 0 0 2px;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0.5px;
`

const StyledDropdown = styled.div`
  display: block;
  position: relative;
  top: -13px;
  background-color: #fff;
`

const StyledDropdownList = styled.ul`
  padding-left: 0;
`

const StyledDropdownItem = styled.li`
  height: 46px;
  padding: 15px 20px;
  list-style-type: none;
  border: solid 1px #d3dbdf;
  border-top: 0;
  cursor: pointer;

  &:hover {
      border-color: #ff6633;
      background-color: #ff6633;
      color: #fff;
  }
`

const SearchBox = ({ entities, onChangeSearchText }) => (
  <StyledWrapper>
    <StyledSelector>
      <StyledDropdown>
        <StyledInput onChange={onChangeSearchText}/>
        <StyledDropdownList>
          {
            _.map(entities.contacts, (entity, key) => {
              const listItem = {
                title: entity.full_name,
                subtitle: entity.city,
                info: entity.org_name,
                avatar: entity.avatar
              }
              return (
                <StyledDropdownItem key>
                  <SearchItem key={entity.full_name} hasAvatar={!_.isEmpty(entity.avatar)} item={listItem} />
                </StyledDropdownItem>
              )
            })
          }
          <StyledDropdownItem />
        </StyledDropdownList>
      </StyledDropdown>
    </StyledSelector>
  </StyledWrapper>
)

SearchBox.propTypes = {
  entities: PropTypes.object,
  onChangeSearchText: PropTypes.func.isRequired
}

export default SearchBox
