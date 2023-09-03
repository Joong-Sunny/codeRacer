import TestCode from '@/app/test-code';
import testTexts from '@/utils/testTexts';

export default function Home() {
  const randomIndex = Math.floor(Math.random() * testTexts.length);
  const testText = testTexts[randomIndex];

  return (
    <div className="pt-20 px-10">
      <h1 className="text-5xl font-semibold text-center mt-10 "> Typing Test</h1>
      <TestCode testText={testText} />
    </div>
  );
}
