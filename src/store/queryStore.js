import create from 'zustand'




const queryStore = create((set) => ({
  dataQuery: '',
  addQuery: (query2) => set(() => ({ dataQuery: query2 })),
}))





export default queryStore;

/*
import create from 'zustand';
const loginStore = create((set, get) => ({
  login: false,
  setLogin: login => set(state => ({login: login})),
}));
export default loginStore;
*/