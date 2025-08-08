import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import SideBar from '../SideBar'
import GamingVideosItem from '../GamingVideosItem'
import {
  GamingBgContainer,
  GamingSubContainer,
  GamingContents,
  GamingNavBar,
  GamingButton,
  GamingTitle,
  GamingVideosContainer,
  FailureBgContainer,
  FailureImage,
  FailureTitle,
  FailureDescription,
  TryAgainButton,
  LoaderContainer,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    apiStatus: apiConstants.initial,
    gamingVideosList: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideosList: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onClickRetry = () => {
    this.setState({apiStatus: apiConstants.inProgress}, this.getGamingVideos)
  }

  renderSuccessView() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarktheme} = value
          const bgColor = isDarktheme ? '#0f0f0f' : '#f9f9f9'
          const {gamingVideosList} = this.state
          return (
            <GamingVideosContainer bgColor={bgColor}>
              {gamingVideosList.map(eachItem => (
                <GamingVideosItem videoItem={eachItem} key={eachItem.id} />
              ))}
            </GamingVideosContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }

  renderFailureView() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarktheme} = value
          const fontColor = isDarktheme ? 'white' : 'black'
          return (
            <FailureBgContainer>
              <FailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
              />
              <FailureTitle fontColor={fontColor}>
                Oops! Something Went Wrong
              </FailureTitle>
              <FailureDescription>
                We are having some trouble to complete your request.
              </FailureDescription>
              <FailureDescription>Please try again.</FailureDescription>
              <TryAgainButton type="button" onClick={this.onClickRetry}>
                Retry
              </TryAgainButton>
            </FailureBgContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }

  renderVideos() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderSuccessView()
      case apiConstants.failure:
        return this.renderFailureView()
      case apiConstants.inProgress:
        return (
          <ThemeAndVideoContext.Consumer>
            {value => {
              const {isDarktheme} = value
              const loaderColor = isDarktheme ? 'white' : 'black'
              return (
                <LoaderContainer
                  className="loader-container"
                  data-testid="loader"
                >
                  <Loader
                    type="ThreeDots"
                    color={loaderColor}
                    height="50"
                    width="50"
                  />
                </LoaderContainer>
              )
            }}
          </ThemeAndVideoContext.Consumer>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarktheme} = value
          const bgColor = isDarktheme ? '#0f0f0f' : '#f9f9f9'
          const headerBgColor = isDarktheme ? '#181818' : '#f1f5f9'
          const fontColor = isDarktheme ? 'white' : 'black'
          const iconBgColor = isDarktheme ? '#0f0f0f' : '#e2e8f0'
          return (
            <GamingBgContainer bgColor={bgColor} data-testid="gaming">
              <Header />
              <GamingSubContainer>
                <SideBar />
                <GamingContents>
                  <GamingNavBar headerBgColor={headerBgColor}>
                    <GamingButton iconBgColor={iconBgColor}>
                      <SiYoutubegaming color="#ff0b37" size="30" />
                    </GamingButton>
                    <GamingTitle fontColor={fontColor}>Gaming</GamingTitle>
                  </GamingNavBar>
                  <div>{this.renderVideos()}</div>
                </GamingContents>
              </GamingSubContainer>
            </GamingBgContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Gaming
