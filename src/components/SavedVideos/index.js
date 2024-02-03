import Header from '../Header'
import SideBar from '../SideBar'
import AppContext from '../../context/AppContext'
import routeConstants from '../routeConstants'
import VideoItem from '../VideoItem'

import {VideoItemsListContainer} from '../Trending/styledComponents'
import {
  WholeRouteContainer,
  SideBarAndContentsContainer,
} from '../Home/styledComponents'
import {
  NoSavedVideosView,
  NoSavedVideosImg,
  NoSavedHeading,
  NoSavedText,
} from './styledComponents'

const currentRoute = routeConstants.savedVideos

const SavedVideosComponent = () => (
  <AppContext.Consumer>
    {value => {
      const {savedVideos, isDark} = value
      const bgColor = isDark ? '#0f0f0f' : '#ebebeb'

      return (
        <WholeRouteContainer data-testid="savedVideos" bgColor={bgColor}>
          <Header />
          <SideBarAndContentsContainer>
            <SideBar activeRoute={currentRoute} />
            {savedVideos.length === 0 ? (
              <NoSavedVideosView>
                <NoSavedVideosImg
                  alt="no saved videos"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                />
                <NoSavedHeading>No saved videos found</NoSavedHeading>
                <NoSavedText>
                  You can save your videos while watching them
                </NoSavedText>
              </NoSavedVideosView>
            ) : (
              <VideoItemsListContainer>
                <li>
                  <h1>Saved Videos</h1> {/* .... Needs improvement */}
                </li>
                {savedVideos.map(item => (
                  <VideoItem
                    key={item.id}
                    videoDetails={item}
                    activeRoute={currentRoute}
                  />
                ))}
              </VideoItemsListContainer>
            )}
          </SideBarAndContentsContainer>
        </WholeRouteContainer>
      )
    }}
  </AppContext.Consumer>
)

export default SavedVideosComponent
