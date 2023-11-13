'use client'

import Image from 'next/image'
import styled from 'styled-components'

const CartButton = () => {
  return (
    <StyledButton>
      <Image src='/icons/cart.svg' alt='' width={19} height={19} />
      <StyledSpan>0</StyledSpan>
    </StyledButton>
  )
}
export default CartButton

const StyledButton = styled.button`
  border-radius: 8px;
  width: 90px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`

const StyledSpan = styled.span`
  color: ${(props) => props.theme.colors.black};
  font-size: 18px;
  font-weight: 700;
`
