import React from 'react'
import { PropTypes } from 'prop-types'
import Avatar from 'avataaars'

import styled from 'styled-components'

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 30px;
  cursor: pointer;

  &:hover {
    background-color: #f6f5f6;
  }
`

const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`

const StyledAvatar = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 2.5vw;
  width: 2.5vw;
  background-color: #ccdcec;
  border-radius: 50%;
  color: #ffffff;
  font-size: 150%;
`

const StyledTitle = styled.span`
  font-size: 120%;
`

const StyledSubtitle = styled.span`
  color: #ababab;
`

const StyledInfo = styled.span`
  width: 30%;
  text-align: right;
`

const SearchItem = ({ hasAvatar, item }) => {
  console.log(item)
  return (
    <StyledWrapper>
      {
        !hasAvatar
        ? <StyledAvatar>{item.title.substring(0, 1)}</StyledAvatar>
        : <Avatar avatarStyle='Circle'
                  style={{width: '2.5vw', height: '2.5vw'}}
                  topType={item.avatar.top_type} 
                  eyeType={item.avatar.eye_type}
                  eyeBrownType={item.avatar.eyebrown_type} 
                  mouthType={item.avatar.mouth_type}
                  skinColor={item.avatar.skin_color}
                  clotheType={item.avatar.clothe_type}
                  accessoriesType={item.avatar.accessories_type} />
      }
      <StyledTitleWrapper>
        <StyledTitle>{item.title}</StyledTitle>
        <StyledSubtitle>{item.subtitle}</StyledSubtitle>
      </StyledTitleWrapper>
      <StyledInfo>{item.info}</StyledInfo>
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
