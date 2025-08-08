import styled from 'styled-components'

export const SideBarBgContainer = styled.div`
  background-color: ${props => props.bgColor};
  width: 25vh;
  height: 120vh;
  padding: 15px;
  border-width: 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const SideBarSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const SideBarContents = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 1px;
`
export const SideBarHome = styled.button`
  width: 125px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 0px;
  margin: 1px;
  cursor: pointer;
  border: 0px;
  background-color: ${props =>
    props.isActiveTab ? props.tabBgColor : 'transparent'};
`
export const SideBarTrending = styled.button`
  list-style-type: none;
  width: 140px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 1px;
  cursor: pointer;
  border: 0px;
  background-color: ${props =>
    props.isActiveTab ? props.tabBgColor : 'transparent'};
`
export const SideBarGaming = styled.button`
  list-style-type: none;
  width: 125px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 1px;
  cursor: pointer;
  border: 0px;
  background-color: ${props =>
    props.isActiveTab ? props.tabBgColor : 'transparent'};
`
export const SideBarSavedVideos = styled.button`
  list-style-type: none;
  width: 140px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 1px;
  cursor: pointer;
  border: 0px;
  background-color: ${props =>
    props.isActiveTab ? props.tabBgColor : 'transparent'};
`
// color:#1e293b;
export const SideBarName = styled.p`
  font-size: 12px;
  color: ${props => props.fontColor};
  margin-left: 8px;
`
export const ContactUs = styled.p`
  font-size: 15px;
  margin-bottom: 4px;
  color: ${props => props.fontColor};
`
export const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2px;
`
export const FaceBookIcon = styled.img`
  height: 30px;
  width: 30px;
  margin: 2px;
`
export const TwitterIcon = styled.img`
  height: 30px;
  width: 30px;
  margin: 2px;
`
export const LinkedInIcon = styled.img`
  height: 30px;
  width: 30px;
  margin: 2px;
`
export const ContactUsDescription = styled.p`
  font-size: 15px;
  margin-bottom: 4px;
  color: ${props => props.fontColor};
`
