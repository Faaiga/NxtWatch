import styled from 'styled-components'

export const VideoDetailsBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`
export const VideoDetailsContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`
export const VideoItemContainer = styled.div`
  background-color: ${props => props.bgColor};
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
