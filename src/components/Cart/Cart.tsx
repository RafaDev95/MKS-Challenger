'use client'

import { X } from 'lucide-react'

import styled from 'styled-components'
import { Button } from '@/components'
import CartBody from './CartBody'

const Cart = () => {
  return (
    <Container>
      <CartHeader>
        <StyledH1>Carrinho de compras</StyledH1>
        <Button variant='justIcon'>
          <X size={20} />
        </Button>
      </CartHeader>
      <CartBody />
    </Container>
  )
}
export default Cart

const Container = styled.div`
  display: none;
  box-shadow: -5px 0 6px 0 rgba(0, 0, 0, 0.13);
  background: ${(props) => props.theme.colors.primary};
  position: absolute;
  top: 0;
  right: 0;
  min-height: 100%;
  width: 486px;
  padding: 36px 47px;

  // display: flex;
  flex-direction: column;
`

const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 64px;
`

const StyledH1 = styled.h1`
  color: white;
  max-width: 180px;
  font-size: 27px;
  font-weight: 700;
`
