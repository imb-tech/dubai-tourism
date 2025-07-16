import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Atraction = {
  atraction: AtractionOffers[];
  addAtraction: (newAtraction: AtractionOffers[]) => void;
  removeAtraction: (id: number) => void;
  clearAtraction: () => void;
};

export const useAtractionStore = create<Atraction>()(
  persist(
    (set) => ({
      atraction: [],
      addAtraction: (newAtraction) =>
        set((state) => {
          const current = [...state.atraction];
          newAtraction.forEach((item) => {
            const index = current.findIndex((idx) => idx.id === item.id);
            if (index !== -1) {
              current[index] = { ...current[index], ...item };
            } else {
              current.push(item);
            }
            return current;
          });
          return {
            atraction: current,
          };
        }),
      removeAtraction: (id) =>
        set((state) => ({
          atraction: state.atraction.filter((item) => item.id !== id),
        })),
      clearAtraction: () => set({ atraction: [] }),
    }),
    {
      name: 'atraction-store',
    }
  )
);
