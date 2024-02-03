import AppContext from '../../context/AppContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  WholeRouteContainer,
  SideBarAndContentsContainer,
} from '../Home/styledComponents'
import {
  NotFoundCard,
  NotFoundImg,
  NotFoundHeading,
  NotFoundText,
} from './styledComponents'

const NotFound = () => (
  <AppContext.Consumer>
    {value => {
      const {isDark} = value
      const hColor = isDark ? '#f9f9f9' : '#181818'
      const pColor = isDark ? '#94a3b8' : '#212121'
      const bgColor = isDark ? '#231f20' : '#ebebeb'
      const notFoundImgUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <WholeRouteContainer bgColor={bgColor}>
          <Header />
          <SideBarAndContentsContainer>
            <SideBar />
            <NotFoundCard>
              <NotFoundImg alt="not found" src={notFoundImgUrl} />
              <NotFoundHeading color={hColor}>Page Not Found</NotFoundHeading>
              <NotFoundText color={pColor}>
                We are sorry, the page you requested could not be found.
              </NotFoundText>
            </NotFoundCard>
          </SideBarAndContentsContainer>
        </WholeRouteContainer>
      )
    }}
  </AppContext.Consumer>
)

export default NotFound
