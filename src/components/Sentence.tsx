'use client';

import Character from '@components/Character';

interface WordProps {
  text: string;
  userInputText: string;
}

export default function Sentence({ text, userInputText }: WordProps) {
  return (
    <div>
      {text.split('').map((char, index) => {
        const userInputCharacter = index < userInputText.length ? userInputText[index] : undefined;
        return <Character key={index} character={char} userInputCharacter={userInputCharacter} />;
      })}
    </div>
  );
}
