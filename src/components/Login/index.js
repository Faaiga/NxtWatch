import {Component} from 'react'
import Cookies from 'js-cookie'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  LoginContainer,
  LoginCard,
  LoginForm,
  NxtwatchLogo,
  InputContainer,
  Label,
  Input,
  CheckboxInputContainer,
  CheckboxInput,
  CheckboxLabel,
  ErrorMessage,
  LoginButton,
} from './styledComponents'

class Login extends Component {
  state = {
    user: '',
    password: '',
    showPassword: false,
    showError: false,
    errorMsg: '',
  }

  togglePasswordView = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onChangeUsername = event => {
    this.setState({
      user: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSuccessAuth = data => {
    const jwtToken = data.jwt_token
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    this.setState({showError: false})
    history.replace('/')
  }

  onFailureAuth = data => {
    const errorMsg = data.error_msg
    this.setState({showError: true, errorMsg: `*${errorMsg}`})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {user, password} = this.state
    if (user !== '' && password !== '') {
      const userDetails = {
        username: user,
        password,
      }
      const apiUrl = 'https://apis.ccbp.in/login'
      const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
      }
      const response = await fetch(apiUrl, options)
      const data = await response.json()
      if (response.ok === true) {
        this.onSuccessAuth(data)
      } else {
        this.onFailureAuth(data)
      }
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarktheme} = value
          const bgColor = isDarktheme ? '#181818' : '#f9f9f9'
          const cardBgColor = isDarktheme ? '#0f0f0f' : 'white'
          const fontColor = isDarktheme ? 'white' : 'black'
          const boxShadowColor = isDarktheme ? '#181818' : '#f1f5f9'
          const {showPassword, showError, errorMsg} = this.state
          const passwordState = showPassword ? 'text' : 'password'
          return (
            <LoginContainer bgColor={bgColor}>
              <LoginCard
                cardBgColor={cardBgColor}
                boxShadowColor={boxShadowColor}
              >
                <NxtwatchLogo
                  src={
                    isDarktheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <LoginForm onSubmit={this.onSubmitForm}>
                  <InputContainer>
                    <Label fontColor={fontColor}>USERNAME</Label>
                    <Input type="text" onChange={this.onChangeUsername} />
                  </InputContainer>
                  <InputContainer>
                    <Label fontColor={fontColor}>PASSWORD</Label>
                    <Input
                      type={passwordState}
                      onChange={this.onChangePassword}
                    />
                  </InputContainer>
                  <CheckboxInputContainer>
                    <CheckboxInput
                      id="checkbox"
                      type="checkbox"
                      onClick={this.togglePasswordView}
                    />
                    <CheckboxLabel htmlfor="checkbox" fontColor={fontColor}>
                      Show Password
                    </CheckboxLabel>
                  </CheckboxInputContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  <ErrorMessage>{showError && errorMsg}</ErrorMessage>
                </LoginForm>
              </LoginCard>
            </LoginContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Login
