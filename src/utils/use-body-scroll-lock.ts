import { useLayoutEffect } from 'react';

export const useBodyScrollLock = () => {
  useLayoutEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement;
    const scrollbarWidth = window.innerWidth - body.clientWidth;

    body.setAttribute(
      'style',
      `overflow: hidden; padding-right: ${scrollbarWidth}px;`
    );
    return () => {
      body.removeAttribute('style');
    };
  }, []);
};
