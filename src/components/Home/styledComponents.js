import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  margin: 0px;
  background-color: ${props => props.bgColor};
`
export const HomeSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`
export const HomeSubContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const HomeContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 200vh;
  min-height: 100vh;
`
export const HomeHeaderContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 25vh;
  width: 100%;
  display: ${props => (props.showPremium ? 'flex' : 'none')};
  flex-direction: column;
  background-color: white;
`
export const HomeHeaderSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const NxtwatchLogo = styled.img`
  height: 50px;
  width: 160px;
  margin: 6px;
`
export const CloseButton = styled.button`
  cursor: pointer;
  border: 0px;
  background-color: transparent;
`
export const HomeBannerDescription = styled.p`
  font-size: 18px;
  margin: 6px;
`
export const GetItNowButton = styled.button`
  color: #0f0f0f;
  border: #0f0f0f solid;
  border-width: 1px;
  height: 40px;
  width: 95px;
  cursor: pointer;
  border-radius: 2px;
  margin: 6px;
  font-size: 13px;
  background-color: transparent;
`
export const HomeVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 15px;
`
export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px;
`
export const SearchInput = styled.input`
  border: #94a3b8 solid;
  border-width: 1px;
  height: 30px;
  width: 260px;
  padding: 4px;
  background-color: ${props => props.bgColor};
  color: ${props => props.fontColor};
`
export const SearchButton = styled.button`
  border: #64748b solid;
  border-width: 1px;
  cursor: pointer;
  height: 30px;
  width: 38px;
  background-color: ${props => props.bgColor};
`
export const VideosUnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
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
export const EmptyViewBgContainer = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const EmptyImage = styled.img`
  height: 240px;
  width: 200px;
  margin: 9px;
`
export const EmptyTitle = styled.h1`
  font-size: 20px;
  margin: 5px;
  color: ${props => props.fontColor};
`
export const EmptyDescription = styled.p`
  color: #94a3b8;
  font-size: 14px;
  margin: 4px;
`
