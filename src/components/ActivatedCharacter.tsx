'use client';

import { useState, useEffect } from 'react';

interface ActivatedCharacterProps {
  character: string;
  userInputCharacter?: string;
}

function ActivatedCharacter({ character, userInputCharacter }: ActivatedCharacterProps) {
  //(TBD) it should be changed according to userInput
  const textColorClass = 'text-white'; //default color
  // if (userInputCharacter) {
  //   textColorClass = character === userInputCharacter ? 'text-blue-500' : 'text-red-500';
  // }

  const [animate, setAnimate] = useState(false);
  const [displayUserInput, setDisplayUserInput] = useState(true); // 이 상태는 userInputCharacter를 화면에 표시할지 결정합니다.

  useEffect(() => {
    if (userInputCharacter) {
      setAnimate(true);
      setDisplayUserInput(true);
      setTimeout(() => {
        setAnimate(false);
        setDisplayUserInput(false);
      }, 500);
    }
  }, [userInputCharacter]);

  return (
    <div className="w-44 h-44 bg-amber-400 rounded flex items-center justify-center text-8xl font-black">
      {displayUserInput && (
        <span className={`absolute ${textColorClass} ${animate ? 'animate-fadeUp' : ''}`}>{userInputCharacter}</span>
      )}
      <span className={textColorClass}>{character}</span>
    </div>
  );
}

export default ActivatedCharacter;
