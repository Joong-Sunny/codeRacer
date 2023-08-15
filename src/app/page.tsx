'use client';

import Sentence from '@components/Sentence';
import { useState, useRef, useEffect } from 'react';

export default function Home() {
  const text = 'const [value, setValue] = useState(defaultValue);';
  const [userInputText, setUserInputText] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  const handleKeyDown = (event: any) => {
    if (event.key === 'Backspace') {
      setUserInputText(prev => prev.slice(0, -1));
    } else if (event.key.length === 1 && userInputText.length < text.length) {
      setUserInputText(prev => prev + event.key);
    }
  };

  return (
    <div className="pt-20 px-10">
      <h1 className="text-5xl font-semibold text-center mt-10 "> Typing Test</h1>
      <div
        className="bg-blue-50 px-20"
        ref={containerRef}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        style={{ outline: 'none' }}
      >
        <Sentence text={text} userInputText={userInputText} />
      </div>
    </div>
  );
}
