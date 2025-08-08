import styled from 'styled-components'

export const NotFoundBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`
export const NotFoundContents = styled.div`
  display: flex;
  flex-direction: row;
`
export const NotFoundSubContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const NotFoundSubContentContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  min-width: 180vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotFoundImage = styled.img`
  height: 500px;
  width: 400px;
  margin: 15px;
`
export const NotFoundTitle = styled.h1`
  font-size: 25px;
  color: ${props => props.fontColor};
  margin: 10px;
`
export const NotFoundDescription = styled.p`
  color: #7e858e;
  font-size: 17px;
  margin: 7px;
`
