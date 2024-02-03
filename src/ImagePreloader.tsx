import React, { useEffect } from "react";

const preloadImages = (
  imageModules: __WebpackModuleApi.RequireContext
): void => {
  imageModules.keys().forEach((key) => {
    const src = imageModules(key);
    if (src) {
      const img = new Image();
      img.onload = () => console.log(`Loaded: ${src}`);
      img.onerror = (e) => console.error(`Error loading image: ${src}`, e);
      img.src = src;
    } else {
      console.error("Image path is undefined.");
    }
  });
};
//이미지 불러오는 함수 assets에 있는 모든 이미지를 context로 자동화해서 불러옴

const ImagePreloader: React.FC = () => {
  useEffect(() => {
    const imagesContext = require.context("./assets", true, /\.png$/);

    preloadImages(imagesContext);
  }, []);

  return null;
};

export default ImagePreloader;
