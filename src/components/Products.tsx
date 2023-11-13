'use client'

import styled from 'styled-components'
import { ProductCard } from '@/components'

const Products = () => {
  return (
    <Container>
      <ProductCard />
    </Container>
  )
}
export default Products

const Container = styled.section`
  padding: 217px 247px;
`
