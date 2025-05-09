import { create } from "zustand";

type Formtype = {
  first_name?: string;
  last_name?: string;
  email: string;
};

type TextStore = {
  text: string;
  setText: (newText: string) => void;
  clearText: () => void;
  user: Formtype | null;
  setUser: (newUser: Formtype) => void;
  clearUser: () => void;
};

export const useTextStore = create<TextStore>((set) => ({
  text: "register",
  setText: (newText) => set({ text: newText }),
  clearText: () => set({ text: "register" }),

  user: null,
  setUser: (newUser) => set({ user: newUser }),
  clearUser: () => set({ user: null }),
}));
