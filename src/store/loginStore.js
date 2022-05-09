import create from 'zustand';

export const loginStore = create((set, get) => ({
  login: false,
  setLogin: login => set(state => ({login: login})),
}));