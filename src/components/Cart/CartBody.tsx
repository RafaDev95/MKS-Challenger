'use client'

import styled from 'styled-components'
import CartItem from './CartItem'

const CartBody = () => {
  return (
    <Container>
      <CartItem />
      <CartItem />
      <CartItem />
    </Container>
  )
}
export default CartBody

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px 0;
`
