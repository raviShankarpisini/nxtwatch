import styled from 'styled-components'

export const WholeRouteContainer = styled.div`
  margin: 0;
  padding: 0;
  background-color: ${props => props.bgColor};
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
`

export const SideBarAndContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.bgColor};
  display: flex;
  overflow-y: hidden;
`

export const PageContents = styled.div`
  width: 100%;
  scroll-behavior: smooth;
  overflow-y: auto;
  padding: 0;
  margin: 0;
`

export const VideoItemsListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  overflow-y: auto;
  width: 100%;
  padding: 10px;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`

export const BannerCardBgContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 15px;
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const BannerCardTextSection = styled.div`
  color: ${props => props.color};
  font-weight: 500;
`

export const BannerText = styled.p`
  font-size: 18px;
  line-height: 48px;
  max-width: 400px;
`

export const BannerBuyButton = styled.button`
  border: 2px solid #181818;
  padding: 10px;
  font-weight: 600;
  color: #181818;
  font-size: 16px;
  background-color: transparent;
  margin-top: 20px;
`

export const BannerCloseBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 10px;
  outline: none;
  align-self: flex-start;
  cursor: pointer;
`

export const DflexCenter = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchBoxForm = styled.form`
  width: 90%;
  max-width: 600px;
  padding: 0;
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.color};
  border-radius: 3px;
  margin: 10px 15px;
  @media screen and (max-width: 768px) {
    margin-right: auto;
    margin-left: auto;
  }
`

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 18px;
  color: ${props => props.color};
  padding: 0 12px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: transparent;
  border: none;
  border-left: 1px solid ${props => props.color};
  cursor: pointer;
`

export const NoSearchResults = styled.div`
  margin-top: 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const NoVideosImg = styled.img`
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`

export const NoVideosHeading = styled.h1`
  font-size: 28px;
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const NoVideosText = styled.p`
  color: gray;
  font-size: 18px;
`
