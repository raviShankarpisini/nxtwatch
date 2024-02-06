import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import AppContext from '../../context/AppContext'
import {
  LoginResponsiveContainer,
  LoginForm,
  WebsiteLogoImg,
  Label,
  Input,
  SubmitBtn,
  ErrMsg,
  Dflex,
  CheckBox,
} from './styledComponents'

class Login extends Component {
  state = {
    usernameInput: 'rahul',
    passwordInput: 'rahul@2021',
    errMsg: '',
    showPassword: false,
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  saveTokenAndGoToHome = token => {
    Cookies.set('jwt_token', token, {expires: 5})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {username: usernameInput, password: passwordInput}
    const URL = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(URL, options)
    const data = await response.json()
    if (response.ok) this.saveTokenAndGoToHome(data.jwt_token)
    else this.setState({errMsg: data.error_msg})
  }

  renderLoginForm = isDark => {
    const {usernameInput, passwordInput, errMsg, showPassword} = this.state
    const passwordInputType = showPassword ? 'text' : 'password'
    const formBgColor = isDark ? '#000000' : '#ffffff'
    const formLabelColor = isDark ? '#f8fafc' : '#1e293b'
    const formTextColor = isDark ? '#f9f9f9' : '#181818'
    const websiteLogoImgUrl = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

    return (
      <LoginForm
        onSubmit={this.onSubmitForm}
        bgColor={formBgColor}
        color={formTextColor}
      >
        <WebsiteLogoImg alt="website logo" src={websiteLogoImgUrl} />
        <Label color={formLabelColor} htmlFor="nameInput">
          USERNAME
        </Label>
        <Input
          color={formTextColor}
          type="text"
          id="nameInput"
          value={usernameInput}
          onChange={this.onChangeUsernameInput}
        />
        <Label color={formLabelColor} htmlFor="passwordInput">
          PASSWORD
        </Label>
        <Input
          color={formTextColor}
          type={passwordInputType}
          id="passwordInput"
          value={passwordInput}
          onChange={this.onChangePasswordInput}
        />
        <Dflex>
          <CheckBox
            type="checkbox"
            onChange={this.onChangeShowPassword}
            id="showPassword"
          />
          <Label color={formLabelColor} noMargin htmlFor="showPassword">
            Show Password
          </Label>
        </Dflex>
        <SubmitBtn type="submit">Login</SubmitBtn>
        <ErrMsg>{errMsg}</ErrMsg>
      </LoginForm>
    )
  }

  render() {
    const accessToken = Cookies.get('jwt_token')
    if (accessToken !== undefined) return <Redirect to="/" />
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColor = isDark ? '#212121' : '#d7dfe9'

          return (
            <LoginResponsiveContainer bgColor={bgColor}>
              {this.renderLoginForm(isDark)}
            </LoginResponsiveContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Login
