import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  height: 100vh;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  min-width: 230px;
  max-width: 230px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LinksSection = styled.div`
  padding: 0;
  list-style-type: none;
`

export const CustomLink = styled(Link)`
  color: ${props => props.color};
  text-decoration: none;
  padding: 10px;
  display: flex;
  align-items: center;
`

export const LinkContainer = styled.li`
  width: 100%;
  background-color: ${props =>
    props.isActive ? props.activeBg : 'transparent'};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  font-size: 16px;
`

export const LinkText = styled.p`
  margin-left: 12px;
`

export const ContactUsSection = styled.div`
  margin-top: auto;
  margin-left: 20px;
  margin-bottom: 50px;
`

export const Heading = styled.p`
  font-size: 20px;
  line-height: 48px;
`

export const SocialMediaSection = styled.div`
  display: flex;
  align-items: center;
`

export const SocialMediaIcon = styled.img`
  height: 28px;
  margin-right: 15px;
`

export const Parah = styled.p`
  line-height: 24px;
  font-size: 14px;
  padding: 20px;
  padding-left: 0;
`
