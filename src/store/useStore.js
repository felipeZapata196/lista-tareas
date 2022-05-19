import create from 'zustand'

const useStore = create((set) => ({
  items: 0,
  increaseItems: () => set(state => ({ items: state.items + 1 })),
  removeAllItems: () => set({ items: 0 })
}))


export default useStore;

