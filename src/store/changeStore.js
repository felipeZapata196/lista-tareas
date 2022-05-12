import create from 'zustand'







const changeStore = create((set) => ({
  change: '',
  addChange: (state) => set(() => ({ change: state})),
}))



export default changeStore;

/*
import create from 'zustand';
const loginStore = create((set, get) => ({
  login: false,
  setLogin: login => set(state => ({login: login})),
}));
export default loginStore;
*/