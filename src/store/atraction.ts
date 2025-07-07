import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type FormType = {
  id: string;
  tour_options: string;
  transfer_option: string;
  date: string;
  adult: number;
  child: number;
  infant: number;
};

type Atraction = {
  atraction: FormType[];
  addAtraction: (newAtraction: FormType[]) => void;
  removeAtraction: (id: string) => void;
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
