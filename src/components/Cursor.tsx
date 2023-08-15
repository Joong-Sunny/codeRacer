export default function Cursor({ position }: { position: { top: number; left: number } }) {
  return (
    <span
      className="cursor-character animate-blink"
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
      }}
    >
      |
    </span>
  );
}
