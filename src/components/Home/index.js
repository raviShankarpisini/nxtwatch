import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoMdClose} from 'react-icons/io'
import {BsSearch} from 'react-icons/bs'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import FailureView from '../FailureView'
import LoaderView from '../LoaderView'

import routeConstants from '../routeConstants'
import apiStatusConstants from '../apiStatusConstants'
import './index.css'
import {
  WholeRouteContainer,
  SideBarAndContentsContainer,
  VideoItemsListContainer,
  BannerCardBgContainer,
  BannerCardTextSection,
  BannerBuyButton,
  BannerCloseBtn,
  BannerText,
  SearchBoxForm,
  PageContents,
  Input,
  SearchButton,
  NoSearchResults,
  NoVideosImg,
  NoVideosHeading,
  NoVideosText,
} from './styledComponents'
import {WebsiteLogoImg} from '../Login/styledComponents'
import AppContext from '../../context/AppContext'
import {RetryBtn} from '../FailureView/styledComponents'

const currentRoute = routeConstants.home
const websiteLogoImgUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

class Home extends Component {
  state = {
    videosData: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    showBanner: true,
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    try {
      const {searchInput} = this.state
      const accessToken = Cookies.get('jwt_token')
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
      const URL = `https://apis.ccbp.in/videos/all?search=${searchInput}`
      console.log('Fetching Data with Search input:', searchInput)

      const response = await fetch(URL, options)
      if (response.ok) {
        const data = await response.json()
        this.setState({
          videosData: data.videos,
          apiStatus: apiStatusConstants.success,
        })
      } else this.setState({apiStatus: apiStatusConstants.failure})
    } catch (err) {
      console.log('NETWORK ERROR')
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = e => {
    this.setState({searchInput: e.target.value})
  }

  onSubmitForm = e => {
    e.preventDefault()
    this.getVideosData()
  }

  closeBanner = async () => {
    await this.setState({showBanner: false})
    console.log('Closing banner triggered....')
  }

  renderBannerSectionView = () => {
    const {showBanner} = this.state

    if (showBanner)
      return (
        <BannerCardBgContainer
          data-testid="banner"
          className="animate__animated animate__fadeInDown animate__fast"
        >
          <BannerCardTextSection>
            <WebsiteLogoImg alt="nxt watch logo" src={websiteLogoImgUrl} />
            <BannerText>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BannerText>
            <BannerBuyButton type="button">GET IT NOW</BannerBuyButton>
          </BannerCardTextSection>
          <BannerCloseBtn
            type="button"
            data-testid="close"
            onClick={this.closeBanner}
          >
            <IoMdClose size={20} color="#181818" />
          </BannerCloseBtn>
        </BannerCardBgContainer>
      )
    return null
  }

  renderSearchBox = () => {
    const {searchInput} = this.state
    const color = '#909090'

    return (
      <SearchBoxForm onSubmit={this.onSubmitForm} color={color}>
        <Input
          type="search"
          placeholder="Search"
          value={searchInput}
          onChange={e => this.setState({searchInput: e.target.value})}
          color={color}
        />
        <SearchButton
          type="button"
          data-testid="searchButton"
          color={color}
          onClick={this.getVideosData}
        >
          <BsSearch color={color} size={18} />
        </SearchButton>
      </SearchBoxForm>
    )
  }

  renderNoSearchResultView = isDark => (
    <NoSearchResults>
      <NoVideosImg
        alt="no videos"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
      />
      <NoVideosHeading color={isDark ? '#f9f9f9' : '#0f0f0f'}>
        No Search results found
      </NoVideosHeading>
      <NoVideosText>
        Try different key words or remove search filter
      </NoVideosText>
      <RetryBtn onClick={this.getVideosData}>Retry</RetryBtn>
    </NoSearchResults>
  )

  renderVideosListView = isDark => {
    const {videosData} = this.state

    if (videosData.length === 0) return this.renderNoSearchResultView(isDark)
    return (
      <VideoItemsListContainer>
        {videosData.map(item => (
          <VideoItem key={item.id} videoDetails={item} />
        ))}
      </VideoItemsListContainer>
    )
  }

  renderHomePageBasedOnAPIStatus = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderView />
      case apiStatusConstants.success:
        return this.renderVideosListView(isDark)
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
          const bgColor = isDark ? '#181818' : '#f9f9f9'

          return (
            <WholeRouteContainer data-testid="home" bgColor={bgColor}>
              <Header />
              <SideBarAndContentsContainer bgColor={bgColor}>
                <SideBar activeRoute={currentRoute} />
                <PageContents>
                  {this.renderBannerSectionView()}
                  {this.renderSearchBox()}
                  {this.renderHomePageBasedOnAPIStatus(isDark)}
                </PageContents>
              </SideBarAndContentsContainer>
            </WholeRouteContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Home
