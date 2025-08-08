import styled from 'styled-components'

export const VideoItemDetailsBgContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  padding: 15px;
`
export const VideoTitle = styled.p`
  color: ${props => props.fontColor};
  font-size: 28px;
  margin: 8px;
`
export const VideoDetailsSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
`
export const Views = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`
export const ViewCount = styled.p`
  font-size: 18px;
  color: #64748b;
  margin: 3px;
`
export const VideoPublishedAt = styled.p`
  font-size: 18px;
  color: #64748b;
  margin: 3px;
`
export const LikeDislikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const LikeSubContainer = styled.button`
  color: ${props => (props.likeStatus ? '#2563eb' : '#64748b')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  margin: 3px;
  border: 0px;
  background-color: transparent;
`
export const IconItem = styled.button`
  border: 0px;
  background-color: transparent;
  margin: 1px;
`
export const DisLikeSubContainer = styled.button`
  color: ${props => (props.disLikeStatus ? '#2563eb' : '#64748b')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  margin: 3px;
  border: 0px;
  background-color: transparent;
`
export const SaveSubContainer = styled.button`
  color: ${props => (props.saveStatus ? '#2563eb' : '#64748b')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  margin: 3px;
  border: 0px;
  background-color: transparent;
`
export const HorizontalLine = styled.hr`
  height: 1px;
  width: 180vh;
  margin: 4px;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ProfileImage = styled.img`
  height: 60px;
  width: 60px;
  margin: 5px;
`
export const ProfileDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ProfileName = styled.p`
  color: ${props => props.fontColor};
  font-size: 20px;
  margin: 4px;
`
export const ProfileSubscriberCount = styled.p`
  color: #64748b;
  font-size: 18px;
  margin: 4px;
`
export const VideoDescription = styled.p`
  font-size: 24px;
  margin: 8px;
  color: ${props => props.fontColor};
`
