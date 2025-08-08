import styled from 'styled-components'

export const GamingVideoBgContainer = styled.div`
  margin: 7px;
  display: flex;
  flex-direction: column;
`
export const ThumbnailImage = styled.img`
  height: 400px;
  width: 280px;
  border-radius: 4px;
  margin: 3px;
`
export const GameTitle = styled.p`
  color: ${props => props.fontColor};
  font-size: 18px;
  margin: 3px;
`
export const ViewCounts = styled.p`
  color: #7e858e;
  font-size: 15px;
  margin: 3px;
`
