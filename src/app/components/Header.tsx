'use client'

import { Logo, CartButton } from './'
import styled from 'styled-components'

const Header = () => {
  return (
    <CustomHeader>
      <Nav>
        <Logo />
        <CartButton />
      </Nav>
    </CustomHeader>
  )
}
export default Header

const CustomHeader = styled.header`
  background: ${(props) => props.theme.colors.primary};
  height: 101px;
  display: flex;
  align-items: center;
  padding: 0 65px;
`

const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
