import { create } from "zustand";

interface CommunityState {
  isWalletConnected: boolean;
  connectWallet: () => void;
  disconnectWallet: () => void;
}

export const useCommunityStore = create<CommunityState>((set) => ({
  isWalletConnected: false,
  connectWallet: () => set({ isWalletConnected: true }),
  disconnectWallet: () => set({ isWalletConnected: false }),
}));
