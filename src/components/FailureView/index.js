import {
  FailureViewContainer,
  FailureImg,
  FailureHeading,
  FailureText,
  RetryBtn,
} from './styledComponents'
import AppContext from '../../context/AppContext'

const FailureView = props => {
  const {retryMethod} = props

  const failureImgUrl =
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
  return (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        const color = isDark ? '#f9f9f9' : '#181818'

        return (
          <FailureViewContainer color={color}>
            <FailureImg alt="failure view" src={failureImgUrl} />
            <FailureHeading>Oops! Something Went Wrong</FailureHeading>
            <FailureText>
              We are having some trouble to complete your request. Please try
              again.
            </FailureText>
            <RetryBtn type="button" onClick={() => retryMethod()}>
              Retry
            </RetryBtn>
          </FailureViewContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default FailureView
