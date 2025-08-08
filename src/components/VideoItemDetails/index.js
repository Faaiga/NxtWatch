import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import VideoItem from '../VideoItem'
import SideBar from '../SideBar'
import Header from '../Header'
import {
  VideoDetailsBgContainer,
  VideoDetailsContents,
  VideoItemContainer,
  FailureBgContainer,
  FailureImage,
  FailureTitle,
  FailureDescription,
  TryAgainButton,
  LoaderContainer,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: [],
    apiStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({
      apiStatus: apiConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderSuccessView() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarktheme} = value
          const bgColor = isDarktheme ? '#0f0f0f' : '#f9f9f9'
          const {videoDetails} = this.state
          return (
            <VideoItemContainer
              bgColor={bgColor}
              data-testid="videoItemDetails"
            >
              <VideoItem videoItem={videoDetails} />
            </VideoItemContainer>
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
              <TryAgainButton onClick={this.onClickRetry} type="button">
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
      case apiConstants.empty:
        return this.renderEmptyVideosView()
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
          return (
            <VideoDetailsBgContainer
              data-testid="videoItemDetails"
              bgColor={bgColor}
            >
              <Header />
              <VideoDetailsContents>
                <SideBar />
                <VideoItemContainer>{this.renderVideos()}</VideoItemContainer>
              </VideoDetailsContents>
            </VideoDetailsBgContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default VideoItemDetails
