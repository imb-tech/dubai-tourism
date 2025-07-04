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
  clearAtraction: () => void;
};

export const useAtractionStore = create<Atraction>()(
  persist(
    (set) => ({
      atraction: [],
      addAtraction: (newAtraction) =>
        set((state) => {

          console.log(
            state.atraction.map((item) => item)
          );

          const current = state.atraction.filter(
            (item) => !newAtraction.some((newItem) => newItem.id !== item.id)
          );
          return {
            atraction: [...current, ...newAtraction],
          };
        }),
      clearAtraction: () => set({ atraction: [] }),
    }),
    {
      name: 'atraction-store',
    }
  )
);
