import create from 'zustand';

const useBearStore = create((set) => ({
  bearsCount: 0,
  increasePopulation: () => set((state) => ({ bearsCount: state.bearsCount + 1 })),
  removeAllBears: () => set({ bearsCount: 0 }),
}));

export default useBearStore;
