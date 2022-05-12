import create from 'zustand'




let queryStore = create((set) => ({
  dataQuery: '',
  addQuery: (query) => 
  set(state=> ({ dataQuery: query })),
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