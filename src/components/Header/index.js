import {withRouter} from 'react-router-dom'
// import {AiFillHome} from 'react-icons/ai'
// import {FiLogOut} from 'react-icons/fi'

import {HiOutlineLightBulb} from 'react-icons/hi'
import {BsMoon} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {ImProfile} from 'react-icons/im'
import Popup from 'reactjs-popup'
import './index.css'

import Cookies from 'js-cookie'
import {
  HamburgerIconButton,
  ModalContainer,
  CloseButton,
  NavLinksList,
  NavbarLargeContainer,
  WebsiteLogo,
  NavLink,
  NavLinkItem,
  ProfileImg,
  AlignRow,
  NavbarSmallContainer,
  ConfirmButton,
  ModalDesc,
  AlignColumn,
  IconButton,
} from './styledComponents'
import AppContext from '../../context/AppContext'

const Header = props => (
  <AppContext.Consumer>
    {value => {
      const {isDark, toggleDarkTheme} = value

      const onChangeTheme = () => {
        toggleDarkTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const websiteImageURL = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const bgColor = isDark ? 'black' : 'white'

      return (
        <>
          <NavbarLargeContainer background={bgColor}>
            <AlignRow>
              <NavLink to="/">
                <WebsiteLogo src={websiteImageURL} alt="website logo" />
              </NavLink>
              <NavLinksList>
                <NavLinkItem>
                  <IconButton
                    type="button"
                    onClick={onChangeTheme}
                    data-testid="theme"
                  >
                    {isDark ? (
                      <HiOutlineLightBulb size="30" color="white" />
                    ) : (
                      <BsMoon size="30" />
                    )}
                  </IconButton>
                </NavLinkItem>
                <NavLinkItem>
                  <ProfileImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </NavLinkItem>
                <NavLinkItem>
                  <Popup
                    modal
                    trigger={
                      <HamburgerIconButton
                        type="button"
                        data-testid="iconButton"
                      >
                        Logout
                      </HamburgerIconButton>
                    }
                    className="popup-content"
                  >
                    {close => (
                      <ModalContainer>
                        <AlignColumn>
                          <ModalDesc>
                            Are you sure, you want to logout
                          </ModalDesc>
                          <AlignRow>
                            <CloseButton
                              type="button"
                              data-testid="closeButton"
                              onClick={() => close()}
                            >
                              Cancel
                            </CloseButton>

                            <ConfirmButton
                              type="button"
                              onClick={onClickLogout}
                            >
                              Confirm
                            </ConfirmButton>
                          </AlignRow>
                        </AlignColumn>
                      </ModalContainer>
                    )}
                  </Popup>
                </NavLinkItem>
              </NavLinksList>
            </AlignRow>
          </NavbarLargeContainer>

          <NavbarSmallContainer background={bgColor}>
            <AlignRow>
              <NavLink to="/">
                <WebsiteLogo src={websiteImageURL} alt="website logo" />
              </NavLink>
              <NavLinksList>
                <NavLinkItem>
                  <IconButton type="button" onClick={onChangeTheme}>
                    {isDark ? (
                      <HiOutlineLightBulb size="30" color="white" />
                    ) : (
                      <BsMoon size="30" />
                    )}
                  </IconButton>
                </NavLinkItem>
                <NavLinkItem>
                  <ImProfile size="30" color="blue" />
                </NavLinkItem>
                <NavLinkItem>
                  <Popup
                    modal
                    trigger={
                      <HamburgerIconButton
                        data-testid="iconButton"
                        type="button"
                      >
                        <FiLogOut size="30" />
                      </HamburgerIconButton>
                    }
                    className="popup-content"
                  >
                    {close => (
                      <ModalContainer>
                        <AlignColumn>
                          <ModalDesc>
                            Are you sure, you want to logout
                          </ModalDesc>
                          <AlignRow>
                            <CloseButton
                              type="button"
                              data-testid="closeButton"
                              onClick={() => close()}
                            >
                              Cancel
                            </CloseButton>

                            <ConfirmButton
                              type="button"
                              onClick={onClickLogout}
                            >
                              Confirm
                            </ConfirmButton>
                          </AlignRow>
                        </AlignColumn>
                      </ModalContainer>
                    )}
                  </Popup>
                </NavLinkItem>
              </NavLinksList>
            </AlignRow>
          </NavbarSmallContainer>
        </>
      )
    }}
  </AppContext.Consumer>
)

export default withRouter(Header)
