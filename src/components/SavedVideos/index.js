import {FaFireAlt} from 'react-icons/fa'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import TrendingVideoItem from '../TrendingVideoItem'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  SavedVideosBgContainer,
  SavedVideosSubContainer,
  SavedVideosContents,
  SavedVideosNavBar,
  SavedVideosButton,
  SavedVideosTitle,
  SavedVideosContainer,
  NoSavedVideosContainer,
  NoSavedVidImg,
  NoSavedVidTitle,
  NoSavedVidDescription,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {savedVideos, isDarktheme} = value
      const bgColor = isDarktheme ? '#0f0f0f' : '#f9f9f9'
      const headerBgColor = isDarktheme ? '#181818' : '#f1f5f9'
      const fontColor = isDarktheme ? 'white' : 'black'
      const iconBgColor = isDarktheme ? '#0f0f0f' : '#e2e8f0'
      return (
        <SavedVideosBgContainer bgColor={bgColor} data-testid="savedVideos">
          <Header />
          <SavedVideosSubContainer>
            <SideBar />
            {savedVideos.length === 0 ? (
              <NoSavedVideosContainer bgColor={bgColor}>
                <NoSavedVidImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedVidTitle fontColor={fontColor}>
                  No saved videos found
                </NoSavedVidTitle>
                <NoSavedVidDescription>
                  You can save your videos while watching them
                </NoSavedVidDescription>
              </NoSavedVideosContainer>
            ) : (
              <SavedVideosContents bgColor={bgColor}>
                <SavedVideosNavBar headerBgColor={headerBgColor}>
                  <SavedVideosButton iconBgColor={iconBgColor}>
                    <FaFireAlt color="#ff0b37" size="30" />
                  </SavedVideosButton>
                  <SavedVideosTitle fontColor={fontColor}>
                    Saved Videos
                  </SavedVideosTitle>
                </SavedVideosNavBar>
                <SavedVideosContainer>
                  {savedVideos.map(eachItem => (
                    <TrendingVideoItem videoItem={eachItem} key={eachItem.id} />
                  ))}
                </SavedVideosContainer>
              </SavedVideosContents>
            )}
          </SavedVideosSubContainer>
        </SavedVideosBgContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideos
