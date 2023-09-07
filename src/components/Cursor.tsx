export default function Cursor({ isActive }: { isActive: boolean }) {
  if (!isActive) {
    return null;
  }

  return <span className="cursor-character animate-blink absolute left-[-3px]">|</span>;
}
