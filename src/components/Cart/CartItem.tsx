'use client'

import { X } from 'lucide-react'
import Image from 'next/image'
import styled from 'styled-components'

import { Button } from '@/components'
import QtyButtons from './QtyButtons'

const CartItem = () => {
  return (
    <Container>
      <Button
        variant='justIcon'
        style={{ position: 'absolute', top: -5, right: -5, width: '18px', height: '18px' }}
      >
        <X size={20} />
      </Button>
      <Image
        src='/test.png'
        alt='jsut test'
        width={60}
        height={60}
        style={{ objectFit: 'contain' }}
      />
      <TitleAndQtyWrapper>
        <ProductTitle>Apple Watch Series 4 GPS</ProductTitle>
        <QtyButtons />
      </TitleAndQtyWrapper>

      <Price>R$399</Price>
    </Container>
  )
}
export default CartItem

const Container = styled.div`
  position: relative;
  width: 379px;
  height: 95px;
  padding: 19px 23px;
  border-radius:${(props) => props.theme.borderRadius.md}
  background: white;
  gap: 0 21px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TitleAndQtyWrapper = styled.div`
  height: 33px;
  display: flex;
  align-items: center;
  gap: 0 9px;
`
const ProductTitle = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
`

const Price = styled.p`
  color: black;
  font-size: 14px;
  font-weight: 700;
`
