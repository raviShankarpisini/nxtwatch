import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: scroll;
`

export const VideoTitle = styled.p`
  color: gray;
  font-size: 22px;
  line-height: 32px;
  margin: 15px 0;
`

export const TrendsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  color: #64748b;
`

export const TrendButton = styled.button`
  margin: 0 10px;
  display: flex;
  align-items: center;
  color: #64748b;
  color: ${props => props.color};
  font-size: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ProfileImg = styled.img`
  width: 64px;
  margin-right: 16px;
`
