'use client';

import Sentence from '@components/Sentence';
import { useState, useRef, useEffect } from 'react';

export default function TestCode({ testText }: { testText: string }) {
  const [userInputText, setUserInputText] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  const handleKeyDown = (event: any) => {
    if (event.key === 'Backspace') {
      setUserInputText(prev => prev.slice(0, -1));
    } else if (event.key === 'Enter') {
      setUserInputText(prev => prev + '\n');
    } else if (event.key.length === 1 && userInputText.length < testText.length) {
      setUserInputText(prev => prev + event.key);
    }
  };

  return (
    <div
      className="bg-blue-50 px-20"
      ref={containerRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{ outline: 'none' }}
    >
      <Sentence text={testText} userInputText={userInputText} />
    </div>
  );
}
