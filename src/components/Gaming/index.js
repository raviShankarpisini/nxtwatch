import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import LoaderView from '../LoaderView'

import routeConstants from '../routeConstants'
import apiStatusConstants from '../apiStatusConstants'
import {
  WholeRouteContainer,
  SideBarAndContentsContainer,
  VideoItemsListContainer,
} from '../Home/styledComponents'
import {
  GamingVideoItem,
  CustomLink,
  GamingVidThumbnail,
  GamingVidTitle,
  GamingVidViewCount,
} from './styledComponents'
import AppContext from '../../context/AppContext'

const currentRoute = routeConstants.gaming

class Gaming extends Component {
  state = {
    videosData: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    try {
      const accessToken = Cookies.get('jwt_token')
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
      const URL = `https://apis.ccbp.in/videos/gaming`
      const response = await fetch(URL, options)
      if (response.ok) {
        const data = await response.json()
        this.setState({
          videosData: data.videos,
          apiStatus: apiStatusConstants.success,
        })
      } else this.setState({apiStatus: apiStatusConstants.failure})
    } catch (err) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideosListView = color => {
    const {videosData} = this.state
    return (
      <VideoItemsListContainer>
        <h1 style={{width: '100%'}}>Gaming</h1>
        {videosData.map(item => (
          <GamingVideoItem key={item.id}>
            <CustomLink to={`/videos/${item.id}`} color={color}>
              <GamingVidThumbnail
                alt="video thumbnail"
                src={item.thumbnail_url}
              />
              <GamingVidTitle>{item.title}</GamingVidTitle>
              <GamingVidViewCount>{item.view_count} views</GamingVidViewCount>
            </CustomLink>
          </GamingVideoItem>
        ))}
      </VideoItemsListContainer>
    )
  }

  renderHomePageBasedOnAPIStatus = color => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderView />
      case apiStatusConstants.success:
        return this.renderVideosListView(color)
      case apiStatusConstants.failure:
        return <FailureView retryMethod={this.getVideosData} />
      default:
        return null
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          const color = isDark ? '#f9f9f9' : '#181818'
          const bgColor = isDark ? '#0f0f0f' : '#f9f9f9'

          return (
            <WholeRouteContainer data-testid="gaming" bgColor={bgColor}>
              <Header />
              <SideBarAndContentsContainer bgColor={bgColor}>
                <SideBar activeRoute={currentRoute} />
                {this.renderHomePageBasedOnAPIStatus(color)}
              </SideBarAndContentsContainer>
            </WholeRouteContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Gaming
