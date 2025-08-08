import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  background-color: ${props => props.bgColor};
  margin: 14px;
  display: flex;
  flex-direction: row;
`
export const ThumbnailImage = styled.img`
  height: 200px;
  width: 300px;
`
export const ThumbnailDescriptionContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`
export const ProfileImage = styled.img`
  height: 100px;
  width: 70px;
  margin: 4px;
`
export const ProfileDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3px;
`
export const ProfileTitle = styled.p`
  color: ${props => props.fontColor};
  font-size: 18px;
  margin: 4px;
`
export const ProfileName = styled.p`
  color: #616e7c;
  font-size: 15px;
  margin: 4px;
`
export const ProfileDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ProfileViewCount = styled.p`
  color: #616e7c;
  font-size: 11px;
  margin: 4px;
`
export const ProfilePublishedDate = styled.p`
  color: #616e7c;
  font-size: 11px;
  margin: 4px;
`
