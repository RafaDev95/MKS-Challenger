import { IProduct } from '@/types/product'

export const fetchProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(
    'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=id&orderBy=DESC'
  )

  if (!response.ok) {
    // Handle error, throw an exception, or return an empty array, depending on your needs
    throw new Error(`Failed to fetch products, status: ${response.status}`)
  }

  const data: IProduct[] = await response.json()

  return data
}
