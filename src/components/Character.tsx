'use client';

interface CharacterProps {
  character: string;
  userInputCharacter?: string;
}

export default function Character({ character, userInputCharacter }: CharacterProps) {
  let textColorClass = 'text-black-500'; //default color
  if (userInputCharacter) {
    textColorClass = character === userInputCharacter ? 'text-blue-500' : 'text-red-500';
  }

  return <div className={textColorClass}>{character}</div>;
}
