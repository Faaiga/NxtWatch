import styled from 'styled-components'

export const GamingBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`
export const GamingSubContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const GamingContents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const GamingNavBar = styled.nav`
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  width: 180vh;
  background-color: ${props => props.headerBgColor};
`
export const GamingButton = styled.button`
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
export const GamingTitle = styled.h1`
  font-size: 25px;
  margin: 5px;
  color: ${props => props.fontColor};
`
export const GamingVideosContainer = styled.ul`
  padding: 13px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  flex-wrap: wrap;
`
export const FailureBgContainer = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FailureImage = styled.img`
  height: 240px;
  width: 200px;
  margin: 9px;
`
export const FailureTitle = styled.h1`
  font-size: 20px;
  margin: 5px;
  color: ${props => props.fontColor};
`
export const FailureDescription = styled.p`
  color: #94a3b8;
  font-size: 14px;
  margin: 4px;
`
export const TryAgainButton = styled.button`
  cursor: pointer;
  border: 0px;
  background-color: #4f46e5;
  height: 30px;
  width: 100px;
  border-radius: 5px;
  color: white;
  margin: 4px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`
