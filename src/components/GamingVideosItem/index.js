import {Link} from 'react-router-dom'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  GamingVideoBgContainer,
  ThumbnailImage,
  GameTitle,
  ViewCounts,
} from './styledComponents'

const GamingVideosItem = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarktheme} = value
      const fontColor = isDarktheme ? 'white' : 'black'
      const {videoItem} = props
      const {thumbnailUrl, title, viewCount, id} = videoItem
      return (
        <Link to={`/videos/${id}`} className="link">
          <GamingVideoBgContainer>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <GameTitle fontColor={fontColor}>{title}</GameTitle>
            <ViewCounts>{viewCount} Watching Worldwide</ViewCounts>
          </GamingVideoBgContainer>
        </Link>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default GamingVideosItem
