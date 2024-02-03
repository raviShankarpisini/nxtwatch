/* eslint-disable camelcase */
import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import LoaderView from '../LoaderView'

import routeConstants from '../routeConstants'
import apiStatusConstants from '../apiStatusConstants'
import AppContext from '../../context/AppContext'

import {
  WholeRouteContainer,
  SideBarAndContentsContainer,
} from '../Home/styledComponents'
import {
  VideoDetailsContainer,
  VideoTitle,
  TrendsRow,
  FlexRow,
  TrendButton,
  ProfileImg,
} from './styledComponents'

const currentRoute = routeConstants.videoItemDetails

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetailsData()
  }

  onLike = () => {
    const {isLiked} = this.state
    if (isLiked) this.setState({isLiked: false})
    else this.setState({isDisliked: false, isLiked: true})
  }

  onDislike = () => {
    const {isDisliked} = this.state
    if (isDisliked) this.setState({isDisliked: false})
    else this.setState({isDisliked: true, isLiked: false})
  }

  getVideoDetailsData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    try {
      const {match} = this.props
      const {params} = match
      const {id} = params
      const accessToken = Cookies.get('jwt_token')
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
      const URL = `https://apis.ccbp.in/videos/${id}`
      const response = await fetch(URL, options)
      if (response.ok) {
        const data = await response.json()
        this.setState({
          videoDetails: data.video_details,
          apiStatus: apiStatusConstants.success,
        })
      } else this.setState({apiStatus: apiStatusConstants.failure})
    } catch (err) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideoDetails = () => {
    const {videoDetails, isLiked, isDisliked} = this.state
    const {
      id,
      title,
      video_url,
      channel,
      view_count,
      published_at,
      description,
    } = videoDetails
    const timeDistance = formatDistanceToNow(new Date(published_at))
    const likeBtnColor = isLiked ? '#2563eb' : '#64748b'
    const dislikeBtnColor = isDisliked ? '#2563eb' : '#64748b'

    return (
      <AppContext.Consumer>
        {value => {
          const {addSavedVideo, removeSavedVideo, wasSavedAlready} = value
          const isSaved = wasSavedAlready(id)
          const saveBtnColor = isSaved ? '#2563eb' : '#64748b'
          return (
            <VideoDetailsContainer>
              <ReactPlayer url={video_url} width="80%" height="80%" />
              <VideoTitle>{title}</VideoTitle>
              <TrendsRow>
                <FlexRow>
                  <p>
                    {view_count} - {timeDistance}
                  </p>
                </FlexRow>
                <FlexRow>
                  <TrendButton color={likeBtnColor} onClick={this.onLike}>
                    <BiLike color={likeBtnColor} size={20} />
                    Like
                  </TrendButton>
                  <TrendButton color={dislikeBtnColor} onClick={this.onDislike}>
                    <BiDislike color={dislikeBtnColor} size={20} />
                    Dislike
                  </TrendButton>
                  <TrendButton
                    color={saveBtnColor}
                    onClick={() => {
                      if (isSaved) removeSavedVideo(id)
                      else addSavedVideo(videoDetails)
                    }}
                  >
                    <MdPlaylistAdd color={saveBtnColor} size={20} />
                    <p>{isSaved ? 'Saved' : 'Save'}</p>
                  </TrendButton>
                </FlexRow>
              </TrendsRow>
              <hr />
              <FlexRow>
                <ProfileImg
                  alt="channel logo"
                  src={channel.profile_image_url}
                />
                <div>
                  <p>{channel.name}</p>
                  <p>{channel.subscriber_count} subscribers</p>
                  <p>{description}</p>
                </div>
              </FlexRow>
            </VideoDetailsContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }

  renderVideoDetailsBasedOnApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderView />
      case apiStatusConstants.success:
        return this.renderVideoDetails()
      case apiStatusConstants.failure:
        return <FailureView retryMethod={this.getVideoDetailsData} />
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
            <WholeRouteContainer
              data-testid="videoItemDetails"
              bgColor={bgColor}
            >
              <Header />
              <SideBarAndContentsContainer>
                <SideBar activeRoute={currentRoute} />
                {this.renderVideoDetailsBasedOnApiStatus()}
              </SideBarAndContentsContainer>
            </WholeRouteContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default VideoItemDetails
