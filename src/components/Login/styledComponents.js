import styled from 'styled-components'

export const LoginResponsiveContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const LoginForm = styled.form`
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  box-shadow: 0 8px 40px rgba(7, 7, 7, 0.3);
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;

  @media screen {
    padding: 60px 48px 48px 48px;
  }
`

export const WebsiteLogoImg = styled.img`
  height: 48px;
`

export const Label = styled.label`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: ${props => props.color};
  margin-bottom: 8px;
  margin-top: 24px;
  align-self: flex-start;
  margin-top: ${props => (props.noMargin ? '8px' : '24px')};
`

export const Input = styled.input`
  width: 312px;
  background-color: transparent;
  border-radius: 2px;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.color};
  padding: 8px 16px;
  border: 1px solid #909090;

  @media screen and (min-width: 768px) {
    width: 360px;
    font-size: 16px;
  }
`

export const SubmitBtn = styled.button`
  width: 312px;
  height: 40px;
  background: #4094ef;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin-top: 8px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 360px;
    margin-top: 16px;
  }
`

export const ErrMsg = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #ef4444;
`

export const Dflex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
`
export const CheckBox = styled.input`
  margin-right: 8px;
`
