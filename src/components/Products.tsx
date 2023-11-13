'use client'

import { useQuery } from 'react-query'

import styled from 'styled-components'
import { ProductCard, ProductCardSkeleton } from '@/components'
import { IProduct } from '@/types/product'
import { fetchProducts } from '@/actions/fetchProducts'

const Products = () => {
  const { isLoading, error, data } = useQuery<IProduct[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })

  return (
    <Container>
      <ProductCard />
      {/* <ProductCardSkeleton /> */}
    </Container>
  )
}
export default Products

const Container = styled.section`
  padding: 217px 247px;
`
// fetch(
//   'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=id&orderBy=DESC'
// )
