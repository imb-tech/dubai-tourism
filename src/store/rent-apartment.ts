import { create } from "zustand"

type TextStore = {
  text: 'list' | 'map'
  setText: (newText: 'list' | 'map') => void
  clearText: () => void
}

export const useTextApartmentStore = create<TextStore>((set) => ({
  text: "list",
  setText: (newText) => set({ text: newText }),
  clearText: () => set({ text: "list" }),
}))
