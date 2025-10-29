import { create } from "zustand";

interface FaqState {
  activeKey: string | null;
  theme: "light" | "dark";
  setActiveKey: (key: string | null) => void;
  toggleTheme: () => void;
}

export const useFaqStore = create<FaqState>((set) => ({
  activeKey: null,
  theme: "dark",
  setActiveKey: (key) => set({ activeKey: key }),
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
}));
