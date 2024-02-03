import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavHeader = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 0px 1px #dcdcdc;
`

export const HamburgerIconButton = styled.button`
  background-color: transparent;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  padding: 8px 20px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Roboto';
  border-radius: 5px;
  @media screen and (max-width: 800px) {
    height: 20px;
    width: 20px;
    padding: 0px;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`

export const NavbarLargeContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: ${props => props.background};
  }
`

export const NavbarSmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: ${props => props.background};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`

export const AlignColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const WebsiteLogo = styled.img`
  width: 150px;
  margin-left: 25px;
  @media screen and (max-width: 800px) {
    margin-left: 15px;
    width: 120px;
  }
`
export const ProfileImg = styled.img`
  width: 30px;
`

export const CloseButton = styled.button`
  padding: 10px 25px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  color: white;
  border: none;
  outline: none;
  background-image: linear-gradient(#bdbdbd, #424242);
  margin: 30px;
  cursor: pointer;
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: #f9f9f9;
  margin-bottom: 50px;
  text-align: center;
`

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    height: 20px;
    width: 15px;
    margin: 0 10px;
  }
`

export const ConfirmButton = styled.button`
  padding: 10px 25px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  color: white;
  border: none;
  outline: none;
  background-image: linear-gradient(#8e87ff, #4f46e5);
  margin: 30px;
  cursor: pointer;
`

export const NavLinksList = styled.ul`
  display: flex;
  flex-direction: row;
  padding-inline-start: 0;
  list-style-type: none;
  padding: 15px;
  margin: 0 15px;
  align-items: center;
  @media screen and (max-width: 800px) {
    margin-top: 15px;
    justify-content: flex-start;
    align-items: center;
  }
`

export const NavLinkItem = styled.li`
  margin-right: 20px;
`

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  text-decoration: none;
`
