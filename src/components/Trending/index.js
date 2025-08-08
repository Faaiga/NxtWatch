import {Component} from 'react'
import {FaFireAlt} from 'react-icons/fa'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideoItem from '../TrendingVideoItem'
import {
  TrendingBgContainer,
  TrendingSubContainer,
  TrendingContents,
  TrendingNavBar,
  TrendingButton,
  TrendingTitle,
  TrendingVideosContainer,
  FailureBgContainer,
  FailureImage,
  FailureTitle,
  FailureDescription,
  TryAgainButton,
  LoaderContainer,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    apiStatus: apiConstants.initial,
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiConstants.in_progress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        trendingVideosList: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onClickRetry = () => {
    this.setState({apiStatus: apiConstants.in_progress}, this.getTrendingVideos)
  }

  renderSuccessView() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarktheme} = value
          const bgColor = isDarktheme ? '#0f0f0f' : '#f9f9f9'
          const {trendingVideosList} = this.state
          return (
            <TrendingVideosContainer bgColor={bgColor}>
              {trendingVideosList.map(eachItem => (
                <TrendingVideoItem videoItem={eachItem} />
              ))}
            </TrendingVideosContainer>
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
      case apiConstants.in_progress:
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
            <TrendingBgContainer data-testid="trending" bgColor={bgColor}>
              <Header />
              <TrendingSubContainer>
                <SideBar />
                <TrendingContents bgColor={bgColor}>
                  <TrendingNavBar headerBgColor={headerBgColor}>
                    <TrendingButton iconBgColor={iconBgColor}>
                      <FaFireAlt color="#ff0b37" size="30" />
                    </TrendingButton>
                    <TrendingTitle fontColor={fontColor}>
                      Trending
                    </TrendingTitle>
                  </TrendingNavBar>
                  <div>{this.renderVideos()}</div>
                </TrendingContents>
              </TrendingSubContainer>
            </TrendingBgContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default Trending
