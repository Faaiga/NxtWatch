import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import './index.css'
import {
  VideoItemContainer,
  ThumbnailImage,
  ThumbnailDescriptionContainer,
  ProfileImage,
  ProfileDescriptionContainer,
  ProfileTitle,
  ProfileName,
  ProfileDetailsContainer,
  ProfileViewCount,
  ProfilePublishedDate,
} from './styledComponents'

const HomeVideoItem = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarktheme} = value
      const fontColor = isDarktheme ? 'white' : 'black'
      const {videoItem} = props
      const {
        channel,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
        id,
      } = videoItem
      const {name, profileImageUrl} = channel
      let formattedDate = ''
      let initialPublishedTime = ''
      let dateString = ''
      let publishedDateList = []
      if (videoItem.length !== 0) {
        formattedDate = publishedAt.replace(',', '')
        const convertedDate = new Date(formattedDate)
        const date = convertedDate.getDate()
        const month = convertedDate.getMonth() + 1
        const year = convertedDate.getFullYear()
        const dateNow = formatDistanceToNow(new Date(year, month, date))
        initialPublishedTime = dateNow
        publishedDateList = initialPublishedTime.split(' ')
        publishedDateList.shift()
      }
      dateString = publishedDateList.join(' ')
      return (
        <Link to={`/videos/${id}`} className="link">
          <VideoItemContainer>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <ThumbnailDescriptionContainer>
              <ProfileImage src={profileImageUrl} alt="channel logo" />
              <ProfileDescriptionContainer>
                <ProfileTitle fontColor={fontColor}>{title}</ProfileTitle>
                <ProfileName>{name}</ProfileName>
                <ProfileDetailsContainer>
                  <ProfileViewCount>{viewCount} views</ProfileViewCount>
                  <ProfilePublishedDate>{`${dateString} ago`}</ProfilePublishedDate>
                </ProfileDetailsContainer>
              </ProfileDescriptionContainer>
            </ThumbnailDescriptionContainer>
          </VideoItemContainer>
        </Link>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default HomeVideoItem
