import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import toast from 'react-hot-toast'

import { ICartItem } from '@/types/cart'

type CartStoreProps = {
  cartItems: ICartItem[]
  addItem: (cartItem: ICartItem) => void
  removeItem: (id: number) => void
  removeAllItemsFromCart: () => void
}

export const useCartStore = create(
  persist<CartStoreProps>(
    (set, get) => ({
      cartItems: [],
      addItem: (product: ICartItem) => {
        const currentItems = get().cartItems
        let existingItem = currentItems.find((item) => item.id === product.id)

        if (existingItem) {
          toast.success('Este produto já está no carrinho.')
        } else {
          set({ cartItems: [...get().cartItems, product] })
          toast.success('Produto adicionado.')
        }
      },
      removeItem: (id: number) => {
        set({ cartItems: [...get().cartItems.filter((item) => item.id !== id)] })
        toast.success('Produto removido.')
      },
      removeAllItemsFromCart: () => set({ cartItems: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
