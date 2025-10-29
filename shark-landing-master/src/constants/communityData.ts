import type { CommunityData } from "../interface";

export const COMMUNITY_CONTENT: CommunityData = {
  title: "Join the Rogue Shark community",
  description:
    "Join our Discord community to be the first to know when we go live…",
  buttons: [
    {
      id: "1",
      label: "Mint a Shark",
      action: "mint",
      className: "btn btn-join",
    },
    {
      id: "2",
      label: "Connect Wallet",
      action: "wallet",
      className: "btn btn-follow",
    },
  ],
  imageSrc: "/assets/community.png", // or `import.meta.env.VITE_IMG_COMMUNITY`
};
