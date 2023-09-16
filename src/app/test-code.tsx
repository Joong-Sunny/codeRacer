'use client';

import Sentence from '@components/Sentence';
import { useState, useRef, useEffect, useCallback } from 'react';
import ActivatedCharacter from '@components/ActivatedCharacter';
import Image from 'next/image';
import typing from '../../public/typing.png';
import useTimer from '@hooks/use-timer';
import Modal from '@components/Modal';

export default function TestCode({ testText }: { testText: string }) {
  const [userInputText, setUserInputText] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const onTimeUp = () => {
    modalRef.current?.openModal();
    console.log("Time's up!");
  };
  const INITIAL_TIME_LIMIT = 30;
  const { timeLeft, isTimeUp } = useTimer({
    initialTime: INITIAL_TIME_LIMIT,
    onTimeUp: useCallback(onTimeUp, []),
  });

  // comparing with 0 (score should be bigger than 0)
  const score = Math.max(0, Math.round((userInputText.length / (INITIAL_TIME_LIMIT - timeLeft)) * 60));

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  const handleKeyDown = (event: any) => {
    if (isTimeUp) {
      return;
    }
    if (event.key === ' ') {
      event.preventDefault();
    }

    if (event.key === 'Backspace') {
      setUserInputText(prev => prev.slice(0, -1));
    } else if (event.key === 'Enter') {
      setUserInputText(prev => prev + '\n');
    } else if (event.key.length === 1 && userInputText.length < testText.length) {
      setUserInputText(prev => prev + event.key);
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-6xl text-orange-400">{timeLeft}</h3>
        <h3 className="text-6xl text-orange-400">{score}</h3>
      </div>
      <div
        className="bg-blue-50 px-20"
        ref={containerRef}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        style={{ outline: 'none' }}
      >
        <Sentence text={testText} userInputText={userInputText} />
      </div>
      <div className="flex justify-center">
        <ActivatedCharacter
          character={testText[userInputText.length + 1]}
          userInputCharacter={userInputText[userInputText.length - 1]}
        />
      </div>
      <div className="flex justify-center">
        <Image src={typing} alt="typingKeyboard" width={400} />
      </div>
      <Modal ref={modalRef}>
        <span>say hi</span>
      </Modal>
    </>
  );
}
