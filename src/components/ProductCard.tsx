'use client'

import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'

import styled from 'styled-components'
import { Button } from '@/components'
import { useCartStore } from '@/shared/useCartStore'

const ProductCard = () => {
  const { addItem } = useCartStore()

  return (
    <Container>
      <Image src='/test.png' width={111} height={138} alt='something' />
      <InfoWrapper>
        <StyledDiv>
          <ProductTitle>Apple Watch Series 4 GPS</ProductTitle>
          <ProductPriceLabel>R$399</ProductPriceLabel>
        </StyledDiv>
        <ProductDescription>Redesigned from scratch and completely revised</ProductDescription>
      </InfoWrapper>
      <Button
        variant='productCard'
        onClick={() =>
          addItem({
            brand: 'Tiringad',
            description: 'Desripxion',
            id: 4,
            name: 'Vampire Survivors',
            price: 200,
            quantity: 4,
          })
        }
      >
        <ShoppingBag />
        Comprar
      </Button>
    </Container>
  )
}
export default ProductCard

const Container = styled.div`
  width: 217.5px;
  height: 285px;
  padding-top: 14px;
  border-radius: ${(props) => props.theme.borderRadius.md};
  background: white;
  box-shadow: 0px 20px 8px 0px rgba(0, 0, 0, 0.14);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px 0;
`

const InfoWrapper = styled.div`
  padding: 0 14px;
  display: flex;
  flex-direction: column;
  gap: 8px 0;
`

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ProductTitle = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
`

const ProductPriceLabel = styled.span`
  background-color: ${(props) => props.theme.colors.darkGray};
  padding: 5px 10px;
  border-radius: ${(props) => props.theme.borderRadius.sm};
  text-align: center;
  color: white;
  font-size: 15px;
  font-weight: 700;
`
const ProductDescription = styled.span`
  color: ${(props) => props.theme.colors.black};
  font-size: 10px;
  font-weight: 300;
`
