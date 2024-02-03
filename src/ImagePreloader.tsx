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

// ImagePreloader component
const ImagePreloader: React.FC = () => {
  useEffect(() => {
    const imagesContext = require.context("./assets", true, /\.png$/);

    preloadImages(imagesContext);
  }, []);

  return null;
};

export default ImagePreloader;
