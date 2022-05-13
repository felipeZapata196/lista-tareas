import create from 'zustand'






const useStore = create((set) => ({
  bears: false,
  increasePopulation: valor => set((state) => ({bears: valor}), console.log(valor)),
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