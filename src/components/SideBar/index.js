import {Link} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  SideBarBgContainer,
  SideBarSubContainer,
  SideBarContents,
  SideBarHome,
  SideBarTrending,
  SideBarGaming,
  SideBarSavedVideos,
  SideBarName,
  ContactUs,
  SocialIconsContainer,
  FaceBookIcon,
  TwitterIcon,
  LinkedInIcon,
  ContactUsDescription,
} from './styledComponents'
import './index.css'

const SideBar = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarktheme, changeTab, activeTab} = value
      const bgColor = isDarktheme ? '#212121' : '#ffffff'
      const fontColor = isDarktheme ? 'white' : 'black'
      const tabBgColor = isDarktheme ? '#606060' : '#e2e8f0'
      const onClickHome = () => {
        changeTab('Home')
      }
      const onClickTrending = () => {
        changeTab('Trending')
      }
      const onClickGaming = () => {
        changeTab('Gaming')
      }
      const onClickSavedVideos = () => {
        changeTab('SavedVideos')
      }
      return (
        <SideBarBgContainer bgColor={bgColor}>
          <SideBarSubContainer>
            <SideBarContents>
              <Link to="/" className="link">
                <SideBarHome
                  onClick={onClickHome}
                  isActiveTab={activeTab === 'Home'}
                  tabBgColor={tabBgColor}
                >
                  <IoMdHome color="red" />
                  <SideBarName fontColor={fontColor}>Home</SideBarName>
                </SideBarHome>
              </Link>
              <Link to="/trending" className="link">
                <SideBarTrending
                  onClick={onClickTrending}
                  isActiveTab={activeTab === 'Trending'}
                  tabBgColor={tabBgColor}
                >
                  <FaFire color="red" />
                  <SideBarName fontColor={fontColor}>Trending</SideBarName>
                </SideBarTrending>
              </Link>
              <Link to="/gaming" className="link">
                <SideBarGaming
                  onClick={onClickGaming}
                  isActiveTab={activeTab === 'Gaming'}
                  tabBgColor={tabBgColor}
                >
                  <SiYoutubegaming color="red" />
                  <SideBarName fontColor={fontColor}>Gaming</SideBarName>
                </SideBarGaming>
              </Link>
              <Link to="/saved-videos" className="link">
                <SideBarSavedVideos
                  onClick={onClickSavedVideos}
                  isActiveTab={activeTab === 'SavedVideos'}
                  tabBgColor={tabBgColor}
                >
                  <RiMenuAddLine color="red" />
                  <SideBarName fontColor={fontColor}>Saved videos</SideBarName>
                </SideBarSavedVideos>
              </Link>
            </SideBarContents>
          </SideBarSubContainer>
          <SideBarSubContainer>
            <ContactUs fontColor={fontColor}>CONTACT US</ContactUs>
            <SocialIconsContainer>
              <FaceBookIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <TwitterIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <LinkedInIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialIconsContainer>
            <ContactUsDescription fontColor={fontColor}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsDescription>
          </SideBarSubContainer>
        </SideBarBgContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SideBar
