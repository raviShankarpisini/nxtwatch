import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import AppContext from '../../context/AppContext'
import routeConstants from '../routeConstants'
import VideoItem from '../VideoItem'
import LoaderView from '../LoaderView'

import apiStatusConstants from '../apiStatusConstants'
import {
  WholeRouteContainer,
  SideBarAndContentsContainer,
} from '../Home/styledComponents'
import {VideoItemsListContainer} from './styledComponents'

const currentRoute = routeConstants.trending

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, videosData: []}

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
      const URL = `https://apis.ccbp.in/videos/trending`
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

  renderTrendingContents = () => {
    const {videosData} = this.state
    return (
      <VideoItemsListContainer>
        <li>
          <h1>Trending</h1> {/* .... Needs improvement */}
        </li>
        {videosData.map(item => (
          <VideoItem
            key={item.id}
            videoDetails={item}
            activeRoute={currentRoute}
          />
        ))}
      </VideoItemsListContainer>
    )
  }

  renderTrendingContentsBasedOnApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderView />
      case apiStatusConstants.success:
        return this.renderTrendingContents()
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
          const bgColor = isDark ? '#0f0f0f' : '#ebebeb'

          return (
            <WholeRouteContainer data-testid="trending" bgColor={bgColor}>
              <Header />
              <SideBarAndContentsContainer>
                <SideBar activeRoute={currentRoute} />
                {this.renderTrendingContentsBasedOnApiStatus()}
              </SideBarAndContentsContainer>
            </WholeRouteContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Trending
