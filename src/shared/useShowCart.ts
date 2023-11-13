import { create } from 'zustand'

type ShowCartProps = {
  showCart: boolean
  toggleShowCart: () => void
}

export const useShowCart = create<ShowCartProps>((set) => ({
  showCart: false,
  toggleShowCart: () => set((state) => ({ showCart: !state.showCart })),
}))
