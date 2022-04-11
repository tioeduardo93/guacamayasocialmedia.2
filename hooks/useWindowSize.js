import { useState, useEffect } from 'react';

export const useWindowsSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    // just rezise when window stop resizing
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [windowSize])

  return {
    width: windowSize.width,
    height: windowSize.height,
  }
}
