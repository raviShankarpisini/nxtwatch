import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import AppContext from '../../context/AppContext'
import routeConstants from '../routeConstants'

import {
  SideBarContainer,
  LinksSection,
  LinkText,
  LinkContainer,
  ContactUsSection,
  SocialMediaSection,
  SocialMediaIcon,
  Heading,
  Parah,
  CustomLink,
} from './styledComponents'

const SideBar = ({activeRoute}) => {
  const iconColors = {}
  Object.values(routeConstants).forEach(r => {
    iconColors[r] = 'gray'
  })
  iconColors[activeRoute] = 'red'
  const linksActiveness = {}
  Object.values(routeConstants).forEach(r => {
    linksActiveness[r] = activeRoute === r
  })
  const {home, trending, gaming, savedVideos} = routeConstants

  return (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        const bgColor = isDark ? '#0f0f0f' : '#f4f4f4'
        const color = !isDark ? '#181818' : '#f9f9f9'
        const activeBgColor = isDark ? '#424242' : '#cccccc'

        return (
          <SideBarContainer color={color} bgColor={bgColor}>
            <LinksSection color={color}>
              <LinkContainer
                activeBg={activeBgColor}
                isActive={linksActiveness[home]}
              >
                <CustomLink color={color} to={home}>
                  <AiFillHome color={iconColors[home]} size="28" />
                  <LinkText>Home</LinkText>
                </CustomLink>
              </LinkContainer>
              <LinkContainer
                activeBg={activeBgColor}
                isActive={linksActiveness[trending]}
              >
                <CustomLink color={color} to={trending}>
                  <HiFire color={iconColors[trending]} size="28" />
                  <LinkText>Trending</LinkText>
                </CustomLink>
              </LinkContainer>
              <LinkContainer
                activeBg={activeBgColor}
                isActive={linksActiveness[gaming]}
              >
                <CustomLink color={color} to={gaming}>
                  <SiYoutubegaming color={iconColors[gaming]} size="28" />
                  <LinkText>Gaming</LinkText>
                </CustomLink>
              </LinkContainer>
              <LinkContainer
                activeBg={activeBgColor}
                isActive={linksActiveness[savedVideos]}
              >
                <CustomLink color={color} to={savedVideos}>
                  <CgPlayListAdd color={iconColors[savedVideos]} size="28" />
                  <LinkText>Saved videos</LinkText>
                </CustomLink>
              </LinkContainer>
            </LinksSection>

            <ContactUsSection>
              <Heading>CONTACT US</Heading>
              <SocialMediaSection>
                <SocialMediaIcon
                  alt="facebook logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                />
                <SocialMediaIcon
                  alt="twitter logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                />
                <SocialMediaIcon
                  alt="linked in logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                />
              </SocialMediaSection>
              <Parah>
                Enjoy! Now to see your channels and recommendations!
              </Parah>
            </ContactUsSection>
          </SideBarContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default SideBar
