const ASSETS_PATH = import.meta.env.VITE_IMG_ASSETS;

export const getImage = (fileName: string) =>
  `${ASSETS_PATH}/images/${fileName}`;
