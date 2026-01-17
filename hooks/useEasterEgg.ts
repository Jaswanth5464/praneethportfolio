
import { useEffect, useState } from 'react';

const useEasterEgg = (target: string, callback: () => void) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newInput = (input + e.key).slice(-target.length);
      setInput(newInput);
      
      if (newInput.toLowerCase() === target.toLowerCase()) {
        callback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [input, target, callback]);
};

export default useEasterEgg;
