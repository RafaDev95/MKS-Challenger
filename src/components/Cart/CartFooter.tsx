'use client'

import styled from 'styled-components'
import { Button } from '@/components'

const CartFooter = () => {
  return (
    <Container>
      <TotalPriceWrapper>
        <StyledP>Total:</StyledP>
        <StyledP>R$798</StyledP>
      </TotalPriceWrapper>
      <Button variant='callToAction' style={{ color: 'white', fontSize: '28px', fontWeight: 700 }}>
        Finalizar Compra
      </Button>
    </Container>
  )
}
export default CartFooter

const Container = styled.footer`
  margin-top: auto;
`

const TotalPriceWrapper = styled.div`
  padding: 0 47px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 42px;
`

const StyledP = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: white;
`
