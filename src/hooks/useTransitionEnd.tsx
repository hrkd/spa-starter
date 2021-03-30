import { useState, useCallback } from 'react';

const EVENT = 'transitionend';
const transitionEnd = (target: any) => {
  return new Promise((resolve) => {
    const callback = (event: any) => {
      resolve(event);
      target.removeEventListener(EVENT, callback, false);
    };
    if (target) target.addEventListener(EVENT, callback, false);
  });
};

export const useTransitionEnd = () => {
  const [ready, setReady] = useState<boolean>(false);
  const [callback, setCallback] = useState<any>();
  const setTarget = useCallback((target: any) => {
    setCallback(transitionEnd(target));
    setReady(true);
  }, []);

  return [ready, callback, setTarget];
};
