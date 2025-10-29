import { create } from "zustand";

interface ThemeState {
  theme: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: true,
  toggleTheme: () => set((state) => ({ theme: !state.theme })),
}));
