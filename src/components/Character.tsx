'use client';

interface CharacterProps {
  character: string;
}

export default function Character({ character }: CharacterProps) {
  return (
    <div>
      {character}
    </div>
  );
}