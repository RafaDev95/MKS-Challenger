'use client'

import { ShoppingCart } from 'lucide-react'
import styled from 'styled-components'
import { Button } from '@/components'

const CartButton = () => {
  return (
    <Button aria-label='Open shopping cart'>
      <ShoppingCart />
      <StyledSpan>0</StyledSpan>
    </Button>
  )
}
export default CartButton

const StyledSpan = styled.span`
  font-size: 18px;
  font-weight: 700;
`
