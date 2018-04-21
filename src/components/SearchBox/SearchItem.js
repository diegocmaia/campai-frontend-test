import React from 'react'
import { PropTypes } from 'prop-types'
import Avatar from 'avataaars'

import styled from 'styled-components'

const StyledWrapper = styled.div`
  display: flex;
`

const StyledTitleWrapper = styled.div`
  display: flex;
`

const StyledAvatar = styled.div`
`

const SearchItem = ({ hasAvatar, item }) => {
  return (
    <StyledWrapper>
      {
        hasAvatar
        ? <StyledAvatar>{item.title.substring(0, 1)}</StyledAvatar>
        : <Avatar avatarStyle='Circle'
                  topType={item.avatar.top_type} 
                  eyeType={item.avatar.eye_type}
                  eyeBrownType={item.avatar.eyebrown_type} 
                  mouthType={item.avatar.mouth_type}
                  skinColor={item.avatar.skin_color}
                  clotheType={item.avatar.clothe_type}
                  accessoriesType={item.avatar.accessories_type} />
      }
      <StyledTitleWrapper>
        <span>{item.title}</span>
        <span>{item.subtitle}</span>
      </StyledTitleWrapper>
      <span>{item.info}</span>
    </StyledWrapper>
  )
}

SearchItem.propTypes = {
  hasAvatar: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
  }).isRequired,
}

export default SearchItem
