'use client';

import Character from '@components/Character';
import useCursor from '@hooks/use-cursor';
import Cursor from '@components/Cursor';
import { useRef } from 'react';

interface SentenceProps {
  text: string;
  userInputText: string;
}

export default function Sentence({ text, userInputText }: SentenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorPosition = useCursor(containerRef, userInputText.length);

  return (
    <>
      <div className="bg-pink-100 max-h-[20vh] overflow-y-scroll" ref={containerRef}>
        {text.split('\n').map((line, lineIndex) => (
          <span key={lineIndex}>
            {line.split('').map((char, charIndex) => {
              const overallIndex = text.split('\n').slice(0, lineIndex).join('\n').length + charIndex;
              const userInputCharacter = overallIndex < userInputText.length ? userInputText[overallIndex] : undefined;

              return (
                <Character
                  isActive={overallIndex === userInputText.length}
                  key={charIndex}
                  character={char}
                  userInputCharacter={userInputCharacter}
                  overAllIndex={overallIndex}
                />
              );
            })}
            {lineIndex < text.split('\n').length - 1 && <br />}
          </span>
        ))}
      </div>
      {/*{cursorPosition && ReactDOM.createPortal(<Cursor position={cursorPosition} />, document.body)}*/}
    </>
  );
}
