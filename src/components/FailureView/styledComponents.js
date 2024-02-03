import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  margin-top: 10%;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  text-align: center;
  color: ${props => props.color};
`

export const FailureImg = styled.img`
  width: 100%;
  max-width: 400px;
`

export const FailureHeading = styled.h1`
  font-size: 22px;
  font-weight: 600;
  line-height: 48px;
`

export const FailureText = styled.p`
  font-size: 18px;
  line-height: 36px;
`

export const RetryBtn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #4f46e5;
  padding: 10px 30px;
  color: white;
  font-size: 17px;
  font-weight: 600;
  margin-top: 20px;
  cursor: pointer;
`
