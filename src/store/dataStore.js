import create from 'zustand'




const dataStore = create((set) => ({
  dataQuery: ['adios', 'hola'],
  addData: (query2) => set(() => ({ dataQuery: query2 })),
}))




export default dataStore;
