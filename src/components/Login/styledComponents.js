import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`
export const LoginCard = styled.div`
  box-shadow: ${props => props.boxShadowColor} 2px 16px 16px 2px;
  background-color: ${props => props.cardBgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 60vh;
  height: 60vh;
  border-radius: 10px;
`
export const LoginForm = styled.form`
  margin: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const NxtwatchLogo = styled.img`
  height: 50px;
  width: 180px;
  margin: 10px;
`
export const InputContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  justify-content: flex-start;
`
export const Label = styled.label`
  color: #475569;
  font-size: 13px;
  margin: 4px;
  color: ${props => props.fontColor};
`
export const Input = styled.input`
  border: black solid;
  border-width: 1px;
  border-radius: 4px;
  height: 40px;
  width: 180px;
  margin: 4px;
`
export const CheckboxInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
`
export const CheckboxInput = styled.input`
  margin: 4px;
`
export const CheckboxLabel = styled.div`
  font-size: 13px;
  margin: 2px;
  color: ${props => props.fontColor};
`
export const ErrorMessage = styled.p`
  color: red;
  font-size: 13px;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: 0px;
  border-radius: 4px;
  height: 35px;
  width: 200px;
  cursor: pointer;
`
