import {useEffect} from 'react';

/**
 * Utility hook to run async function inside
 * an ordinary useEffect().
 * @param fn
 * @param deps
 */
function useAsyncEffect(fn: () => Promise<void>, deps: any[]) {
  useEffect(() => {
    fn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default useAsyncEffect;
