import styled from 'styled-components'

export const TrendingBgContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
`
export const TrendingSubContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const TrendingContents = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const TrendingNavBar = styled.nav`
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  width: 180vh;
  background-color: ${props => props.headerBgColor};
`
export const TrendingButton = styled.button`
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
export const TrendingTitle = styled.h1`
  font-size: 25px;
  margin: 5px;
  color: ${props => props.fontColor};
`
export const TrendingVideosContainer = styled.ul`
  padding: 13px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
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
