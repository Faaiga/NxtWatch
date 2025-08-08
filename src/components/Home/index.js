import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import {FaSearch} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import SideBar from '../SideBar'
import Header from '../Header'
import HomeVideoItem from '../HomeVideoItem'
import {
  HomeBgContainer,
  HomeSubContainer,
  HomeSubContent,
  HomeContentsContainer,
  HomeHeaderContainer,
  HomeHeaderSubContainer,
  NxtwatchLogo,
  CloseButton,
  HomeBannerDescription,
  GetItNowButton,
  HomeVideosContainer,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  VideosUnorderedList,
  FailureBgContainer,
  FailureImage,
  FailureTitle,
  FailureDescription,
  TryAgainButton,
  LoaderContainer,
  EmptyViewBgContainer,
  EmptyImage,
  EmptyTitle,
  EmptyDescription,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
  empty: 'EMPTY',
}

class Home extends Component {
  state = {
    apiStatus: apiConstants.initial,
    showPremium: true,
    initialSearchInput: '',
    finalSearchInput: '',
    videosList: [],
  }

  componentDidMount() {
    this.getVideosList()
  }

  onClickClose = () => {
    this.setState({showPremium: false})
  }

  onChangeSearchInput = event => {
    this.setState({initialSearchInput: event.target.value})
  }

  onClickSearch = () => {
    const {initialSearchInput} = this.state
    this.setState({finalSearchInput: initialSearchInput}, this.getVideosList)
  }

  onClickRetry = () => {
    this.setState({apiStatus: apiConstants.in_progress}, this.getVideosList)
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiConstants.in_progress})
    const {finalSearchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${finalSearchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachData => ({
        channel: {
          name: eachData.channel.name,
          profileImageUrl: eachData.channel.profile_image_url,
        },
        id: eachData.id,
        publishedAt: eachData.published_at,
        thumbnailUrl: eachData.thumbnail_url,
        title: eachData.title,
        viewCount: eachData.view_count,
      }))
      this.setState({videosList: updatedData})
      const {videosList} = this.state
      if (videosList.length === 0) {
        this.setState({apiStatus: apiConstants.empty})
      } else {
        this.setState({apiStatus: apiConstants.success})
      }
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderSuccessView() {
    const {videosList} = this.state
    return (
      <VideosUnorderedList>
        {videosList.map(eachVideo => (
          <HomeVideoItem videoItem={eachVideo} key={eachVideo.id} />
        ))}
      </VideosUnorderedList>
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

  renderEmptyVideosView() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarktheme} = value
          const fontColor = isDarktheme ? 'white' : 'black'
          return (
            <EmptyViewBgContainer>
              <EmptyImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <EmptyTitle fontColor={fontColor}>
                No Search results found
              </EmptyTitle>
              <EmptyDescription>
                Try different key words or remove search filter
              </EmptyDescription>
              <TryAgainButton type="button" onClick={this.onClickRetry}>
                Retry
              </TryAgainButton>
            </EmptyViewBgContainer>
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
    const {showPremium} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarktheme} = value
          const bgColor = isDarktheme ? '#181818' : '#f9f9f9'
          const fontColor = isDarktheme ? 'white' : 'black'
          return (
            <HomeBgContainer data-testid="home" bgColor={bgColor}>
              <Header />
              <HomeSubContainer>
                <HomeSubContent>
                  <SideBar />
                </HomeSubContent>
                <HomeContentsContainer>
                  <HomeHeaderContainer
                    data-testid="banner"
                    showPremium={showPremium}
                  >
                    <HomeHeaderSubContainer>
                      <NxtwatchLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        className="nxt watch logo"
                        alt="nxt watch logo"
                      />
                      <CloseButton
                        type="button"
                        data-testid="close"
                        onClick={this.onClickClose}
                      >
                        <IoMdClose />
                      </CloseButton>
                    </HomeHeaderSubContainer>
                    <HomeBannerDescription>
                      Buy Nxt Watch Premium prepaid plans with <br /> UPI
                    </HomeBannerDescription>
                    <GetItNowButton>GET IT NOW</GetItNowButton>
                  </HomeHeaderContainer>
                  <HomeVideosContainer bgColor={bgColor}>
                    <SearchInputContainer>
                      <SearchInput
                        type="search"
                        placeholder="search"
                        onChange={this.onChangeSearchInput}
                        bgColor={bgColor}
                        fontColor={fontColor}
                      />
                      <SearchButton
                        bgColor={bgColor}
                        data-testid="searchButton"
                        type="button"
                        onClick={this.onClickSearch}
                      >
                        <FaSearch color="#64748b" />
                      </SearchButton>
                    </SearchInputContainer>
                    <div>{this.renderVideos()}</div>
                  </HomeVideosContainer>
                </HomeContentsContainer>
              </HomeSubContainer>
            </HomeBgContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Home
