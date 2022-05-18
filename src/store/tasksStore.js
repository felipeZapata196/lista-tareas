import create from 'zustand';

export const tasksStore = create((set, get) => ({
  data: [],
  setData: tasks => set(state => ({data: tasks})),
}));