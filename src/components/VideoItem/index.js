import {Component} from 'react'
import ReactPlayer from 'react-player'
import {GoThumbsup, GoThumbsdown} from 'react-icons/go'
import {RiMenuAddLine} from 'react-icons/ri'
import {formatDistanceToNow} from 'date-fns'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  VideoItemDetailsBgContainer,
  VideoTitle,
  VideoDetailsSubContainer,
  Views,
  ViewCount,
  VideoPublishedAt,
  LikeDislikeContainer,
  LikeSubContainer,
  IconItem,
  DisLikeSubContainer,
  SaveSubContainer,
  HorizontalLine,
  ChannelDetailsContainer,
  ProfileImage,
  ProfileDetailsContainer,
  ProfileName,
  ProfileSubscriberCount,
  VideoDescription,
} from './styledComponents'

class VideoItem extends Component {
  state = {
    likeStatus: false,
    disLikeStatus: false,
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {addVideo, isDarktheme} = value
          const bgColor = isDarktheme ? '#0f0f0f' : '#f9f9f9'
          const fontColor = isDarktheme ? 'white' : 'black'
          const {videoItem} = this.props
          const {likeStatus, disLikeStatus, saveStatus} = this.state
          const saveText = saveStatus ? 'Saved' : 'Save'
          const {
            channel,
            description,
            publishedAt,
            title,
            videoUrl,
            viewCount,
          } = videoItem
          let initialName = ''
          let initialProfileImageUrl = ''
          let initialSubscriberCount = ''
          let formattedDate = ''
          let initialPublishedTime = ''
          let dateString = ''
          let publishedDateList = []
          if (videoItem.length !== 0) {
            const {name, profileImageUrl, subscriberCount} = channel
            initialName = name
            initialProfileImageUrl = profileImageUrl
            initialSubscriberCount = subscriberCount
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
          const onClickSaveButton = () => {
            addVideo(videoItem)
            this.setState(prevState => ({
              saveStatus: !prevState.saveStatus,
            }))
          }
          const onClickLike = () => {
            this.setState({
              likeStatus: true,
              disLikeStatus: false,
            })
          }
          const onClickDisLike = () => {
            this.setState({
              likeStatus: false,
              disLikeStatus: true,
            })
          }
          return (
            <VideoItemDetailsBgContainer bgColor={bgColor}>
              <ReactPlayer url={videoUrl} height="500px" width="170vh" />
              <VideoTitle fontColor={fontColor}>{title}</VideoTitle>
              <VideoDetailsSubContainer>
                <Views>
                  <ViewCount>{viewCount} views</ViewCount>
                  <VideoPublishedAt>{`${dateString} ago`}</VideoPublishedAt>
                </Views>
                <LikeDislikeContainer>
                  <LikeSubContainer
                    likeStatus={likeStatus}
                    onClick={onClickLike}
                  >
                    <GoThumbsup size="18" />
                    <IconItem>Like</IconItem>
                  </LikeSubContainer>
                  <DisLikeSubContainer
                    disLikeStatus={disLikeStatus}
                    onClick={onClickDisLike}
                  >
                    <GoThumbsdown size="18" />
                    <IconItem>Dislike</IconItem>
                  </DisLikeSubContainer>
                  <SaveSubContainer
                    saveStatus={saveStatus}
                    onClick={onClickSaveButton}
                  >
                    <RiMenuAddLine size="18" />
                    <IconItem>{saveText}</IconItem>
                  </SaveSubContainer>
                </LikeDislikeContainer>
              </VideoDetailsSubContainer>
              <HorizontalLine />
              <ChannelDetailsContainer>
                <ProfileImage src={initialProfileImageUrl} />
                <ProfileDetailsContainer>
                  <ProfileName fontColor={fontColor}>{initialName}</ProfileName>
                  <ProfileSubscriberCount>
                    {initialSubscriberCount} subscribers
                  </ProfileSubscriberCount>
                </ProfileDetailsContainer>
              </ChannelDetailsContainer>
              <VideoDescription fontColor={fontColor}>
                {description}
              </VideoDescription>
            </VideoItemDetailsBgContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default VideoItem
