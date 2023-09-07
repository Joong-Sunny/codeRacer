'use client';
import { memo } from 'react';
import Cursor from '@components/Cursor';

interface CharacterProps {
  isActive: boolean;
  character: string;
  userInputCharacter?: string;
  overAllIndex: number;
}

function Character({ isActive, character, userInputCharacter, overAllIndex }: CharacterProps) {
  let textColorClass = 'text-black-500'; //default color
  if (userInputCharacter) {
    textColorClass = character === userInputCharacter ? 'text-blue-500' : 'text-red-500';
  }

  const displayCharacter = character === ' ' ? '\u00A0' : character;

  return (
    <div className="relative inline-block">
      <Cursor isActive={isActive} />
      <span className={textColorClass} data-index={overAllIndex}>
        {displayCharacter}
      </span>
    </div>
  );
}

export default memo(Character);
