import { useEffect, useState } from 'react';

const useLocalStorage = (
  key: string,
  initialState: any
): [any, React.Dispatch<any>] => {
  const savedState = localStorage.getItem(key);
  const [state, setState] = useState(savedState ?? initialState);

  useEffect(() => {
    let storageState = state;
    if (typeof state !== 'string') {
      storageState = JSON.stringify(state);
    }

    localStorage.setItem(key, storageState);
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;
