import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  margin: 14px;
  display: flex;
  flex-direction: column;
  width: 250px;
`
export const ThumbnailImage = styled.img`
  height: 150px;
  width: 250px;
`
export const ThumbnailDescriptionContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ProfileImage = styled.img`
  height: 70px;
  width: 50px;
  margin: 4px;
`
export const ProfileDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3px;
`
export const ProfileTitle = styled.p`
  font-size: 14px;
  margin: 2px;
  color: ${props => props.fontColor};
`
export const ProfileName = styled.p`
  color: #616e7c;
  font-size: 9px;
  margin: 2px;
`
export const ProfileDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ProfileViewCount = styled.p`
  color: #616e7c;
  font-size: 9px;
  margin: 2px;
`
export const ProfilePublishedDate = styled.p`
  color: #616e7c;
  font-size: 9px;
  margin: 2px;
`
