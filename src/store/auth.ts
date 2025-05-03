import { create } from "zustand"

type TextStore = {
  text: string
  setText: (newText: string) => void
  clearText: () => void
}

export const useTextStore = create<TextStore>((set) => ({
  text: "",
  setText: (newText) => set({ text: newText }),
  clearText: () => set({ text: "" }),
}))
