import styled from 'styled-components'

export const HeaderBgContainer = styled.nav`
  top: 0;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  padding: 7px;
`
export const HeaderSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 30vh;
`
export const NxtwatchLogo = styled.img`
  height: 40px;
  width: 130px;
  cursor: pointer;
`
export const IconButton = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
`
export const LogoutButton = styled.button`
  cursor: pointer;
  border: ${props => props.buttonColor} solid;
  border-width: 1px;
  background-color: transparent;
  color: ${props => props.buttonColor};
  height: 35px;
  width: 70px;
  font-size: 16px;
  border-radius: 4px;
`
