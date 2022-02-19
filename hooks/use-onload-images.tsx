import { useState, useEffect, RefObject } from "react";

export const useOnLoadImages = (ref: RefObject<HTMLElement>) => {
  const [status, setStatus] = useState(false);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (!status) {
        setPercentage(100);
        setStatus(true);
      }
    }, 5000);
    const updateStatus = (images: HTMLImageElement[]) => {
      const count = images?.filter((p) => p.complete).length;
      if ((images?.length ?? 0) > 0) {
        setPercentage(Math.ceil((count / images.length) * 100));
      }
      setStatus(
        images.map((image) => image.complete).every((item) => item === true)
      );
    };

    if (!ref?.current) return;

    const imagesLoaded = Array.from(ref.current.querySelectorAll("img"));

    if (imagesLoaded.length === 0) {
      setStatus(true);
      return;
    }

    imagesLoaded.forEach((image) => {
      image.addEventListener("load", () => updateStatus(imagesLoaded), {
        once: true,
      });
      image.addEventListener("error", () => updateStatus(imagesLoaded), {
        once: true,
      });
    });

    return;
  }, [ref]);

  return { status, percentage };
};
