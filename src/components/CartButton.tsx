'use client'

import { ShoppingCart } from 'lucide-react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Button } from '@/components'
import { useCartStore } from '@/shared/useCartStore'
import { useShowCart } from '@/shared/useShowCart'
import { loadingAnimation } from './ProductCardSkeleton'

const CartButton = () => {
  const { cartItems } = useCartStore()
  const { toggleShowCart, showCart } = useShowCart()

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  })

  if (!isMounted) {
    return <SkeletonButton />
  }

  return (
    <Button aria-label='Open shopping cart' onClick={toggleShowCart}>
      <ShoppingCart />

      {!showCart && <StyledSpan>{cartItems?.length ?? 0}</StyledSpan>}
    </Button>
  )
}
export default CartButton

const StyledSpan = styled.span`
  font-size: 18px;
  font-weight: 700;
`

const SkeletonButton = styled.div`
  width: 90px;
  height: 50px;
  background: ${(props) => props.theme.colors.lightGray};
  border-radius: ${(props) => props.theme.borderRadius.md}

  animation: ${loadingAnimation} 1.5s infinite;
`
