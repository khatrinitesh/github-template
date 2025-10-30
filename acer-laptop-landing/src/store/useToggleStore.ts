import { create } from "zustand";

interface UIStore {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  toggleMenu: () => void;
}

export const useToggleStore = create<UIStore>((set) => ({
  toggle: false,
  setToggle: (value) => set({ toggle: value }),
  toggleMenu: () => set((state) => ({ toggle: !state.toggle })),
}));
