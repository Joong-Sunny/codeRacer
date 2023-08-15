'use client';
import { memo } from 'react';

interface CharacterProps {
  character: string;
  userInputCharacter?: string;
  overAllIndex: number;
}

function Character({ character, userInputCharacter, overAllIndex }: CharacterProps) {
  let textColorClass = 'text-black-500'; //default color
  if (userInputCharacter) {
    textColorClass = character === userInputCharacter ? 'text-blue-500' : 'text-red-500';
  }

  return (
    <span className={textColorClass} data-index={overAllIndex}>
      {character}
    </span>
  );
}

export default memo(Character);
