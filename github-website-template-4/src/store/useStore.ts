import { create } from "zustand";

interface ThemeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

interface ScrollState {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export const useScrollStore = create<ScrollState>((set) => ({
  activeSection: "home",
  setActiveSection: (section) => set({ activeSection: section }),
}));
