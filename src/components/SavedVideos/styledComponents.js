import styled from 'styled-components'

export const SavedVideosBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`
export const SavedVideosSubContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 180vh;
  background-color: ${props => props.bgColor};
`
export const NoSavedVidImg = styled.img`
  height: 500px;
  width: 540px;
  margin: 17px;
`
export const NoSavedVidTitle = styled.h1`
  color: ${props => props.fontColor};
  font-size: 20px;
  margin: 10px;
`
export const NoSavedVidDescription = styled.p`
  color: #616e7c;
  font-size: 15px;
  margin: 10px;
`
export const SavedVideosContents = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const SavedVideosNavBar = styled.nav`
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  width: 180vh;
  background-color: ${props => props.headerBgColor};
`
export const SavedVideosButton = styled.button`
  border: 0px;
  background-color: ${props => props.iconBgColor};
  border-radius: 50px;
  height: 50px;
  width: 50px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SavedVideosTitle = styled.h1`
  font-size: 25px;
  margin: 5px;
  color: ${props => props.fontColor};
`
export const SavedVideosContainer = styled.ul`
  padding: 13px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
`
