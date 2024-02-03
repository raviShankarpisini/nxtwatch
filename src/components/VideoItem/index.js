/* eslint-disable camelcase */
import {formatDistanceToNow} from 'date-fns'

import AppContext from '../../context/AppContext'
import routeConstants from '../routeConstants'

import {
  VideoItemContainer,
  VideoThumbnail,
  ProfilePic,
  VideoTitle,
  VideoChannelName,
  VideoTrends,
  VideoItemBottomSection,
  CustomLink,
  FlexGrowLi,
} from './styledComponents'

const VideoItem = ({videoDetails, activeRoute}) => {
  const {
    id,
    title,
    thumbnail_url,
    channel,
    view_count,
    published_at,
  } = videoDetails
  const {name, profile_image_url} = channel

  return (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        const color = isDark ? '#f9f9f9' : '#181818'
        const publishedDateToNow = formatDistanceToNow(new Date(published_at))
        const isWideCard =
          activeRoute === routeConstants.trending ||
          activeRoute === routeConstants.savedVideos

        return (
          <FlexGrowLi isWideCard={isWideCard}>
            <CustomLink color={color} to={`/videos/${id}`}>
              <VideoItemContainer isFlexRow={isWideCard}>
                <VideoThumbnail alt="video thumbnail" src={thumbnail_url} />
                <VideoItemBottomSection>
                  <ProfilePic alt="channel logo" src={profile_image_url} />
                  <div>
                    <VideoTitle>{title}</VideoTitle>
                    <VideoChannelName>{name}</VideoChannelName>
                    <VideoTrends>
                      {view_count} views - {publishedDateToNow}
                    </VideoTrends>
                  </div>
                </VideoItemBottomSection>
              </VideoItemContainer>
            </CustomLink>
          </FlexGrowLi>
        )
      }}
    </AppContext.Consumer>
  )
}

VideoItem.defaultProps = {
  activeRoute: routeConstants.home,
  videoDetails: null,
}

export default VideoItem
