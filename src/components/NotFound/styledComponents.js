import styled from 'styled-components'

export const NotFoundCard = styled.div`
  background-color: ${props => props.bgColor};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`

export const NotFoundImg = styled.img`
  width: 80%;
  max-width: 600px;
`

export const NotFoundHeading = styled.h1`
  margin-top: 20px;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  color: ${props => props.color};
  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
`

export const NotFoundText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${props => props.color};
`
