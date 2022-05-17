import create from 'zustand'




const queryStore = create((set) => ({
  dataQuery: '',
  addQuery: (query2) => set(() => ({ dataQuery: query2 })),
}))




export default queryStore;
