import create from 'zustand'






const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))


export default useStore;

/*
import create from 'zustand';
const loginStore = create((set, get) => ({
  login: false,
  setLogin: login => set(state => ({login: login})),
}));
export default loginStore;
*/