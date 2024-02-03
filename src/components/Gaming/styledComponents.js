import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingVideoItem = styled.li`
  width: 300px;
  padding: 0;
  flex-grow: 1;
  padding: 15px;
  @media screen and (max-width: 767px) {
    padding: 15px 10px;
  }
`

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.color};
`

export const GamingVidThumbnail = styled.img`
  width: 100%;
`

export const GamingVidTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
`

export const GamingVidViewCount = styled.p`
  font-size: 16px;
  font-weight: 500;
`
