import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BsBrightnessHighFill, BsMoon} from 'react-icons/bs'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  HeaderBgContainer,
  HeaderSubContainer,
  NxtwatchLogo,
  IconButton,
  ProfileImage,
  LogoutButton,
} from './styledComponents'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {toggletheme, isDarktheme} = value
      const onClickThemeButton = () => {
        toggletheme()
      }
      const bgColor = isDarktheme ? '#212121' : '#ffffff'
      const fontColor = isDarktheme ? 'white' : 'black'
      const buttonColor = isDarktheme ? 'white' : '#3b82f6'
      const onLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/')
      }
      return (
        <HeaderBgContainer fontColor={fontColor} bgColor={bgColor}>
          <HeaderSubContainer>
            <Link to="/">
              <NxtwatchLogo
                src={
                  isDarktheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                className="nxt watch logo"
                alt="website logo"
              />
            </Link>
          </HeaderSubContainer>
          <HeaderSubContainer>
            <IconButton
              type="button"
              onClick={onClickThemeButton}
              data-testid="theme"
            >
              {isDarktheme ? (
                <BsBrightnessHighFill size="32" color={fontColor} />
              ) : (
                <BsMoon size="32" color={fontColor} />
              )}
            </IconButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <LogoutButton
              onClick={onLogout}
              type="button"
              buttonColor={buttonColor}
            >
              Logout
            </LogoutButton>
          </HeaderSubContainer>
        </HeaderBgContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default withRouter(Header)
