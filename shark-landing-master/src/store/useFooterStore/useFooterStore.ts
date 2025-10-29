import { create } from "zustand";

interface FooterState {
  theme: "light" | "dark";
  year: number;
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;
}

export const useFooterStore = create<FooterState>((set) => ({
  theme: "dark",
  year: new Date().getFullYear(),
  setTheme: (theme) => set({ theme }),
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "dark" ? "light" : "dark",
    })),
}));
