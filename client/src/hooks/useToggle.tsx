import { useState } from 'react';

const useToggle = (currentStatus: boolean): [boolean, () => void] => {
  const [isVisible, setIsVisible] = useState(currentStatus);
  const toggleForm = () => setIsVisible(!isVisible);

  return [isVisible, toggleForm];
};

export default useToggle;
