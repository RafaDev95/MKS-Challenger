import { Cart, Header, Products } from '@/components'

export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh' }}>
      <Header />
      <Products />
      <Cart />
    </main>
  )
}
