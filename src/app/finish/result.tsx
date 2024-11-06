'use client';

import { useRouter } from 'next/navigation';
import ErrorPage from './error';

type Results = {
  [framework: string]: {
    framework: string;
    answer: string;
  };
};

const results: Results = {
  react: {
    framework: 'React',
    answer:
      'You’re flexible and enjoy freedom in your choices. You prefer to have control over the tools you use and love the idea of an extensive ecosystem. You’re likely a curious and open-minded person who enjoys exploring various solutions. Rules aren’t your thing; you’d rather adapt things to fit your needs.',
  },
  angular: {
    framework: 'Angular',
    answer:
      'You thrive on structure and love a well-defined path. You appreciate a strong foundation with TypeScript and a reliable ecosystem that offers everything you need out-of-the-box. You value consistency and productivity, and you’re likely someone who enjoys a well-organized and structured approach to projects.',
  },
  vue: {
    framework: 'Vue',
    answer:
      'You’re someone who values simplicity and elegance. You appreciate frameworks that offer a balance of structure and flexibility, and you enjoy writing clean, readable code. You prefer a less opinionated tool but still enjoy having guidance when you need it. You’re practical, adaptable, and focused on finding efficient solutions.',
  },
  svelte: {
    framework: 'Svelte',
    answer:
      'You’re adventurous and love being on the cutting edge. Minimalism and performance are important to you, and you prefer frameworks that are light and fast. You’re likely someone who values innovation and is unafraid of trying new approaches. You enjoy a hands-on, low-level approach and want your code to be as efficient as possible.',
  },
};

type FinishContentProps = {
  resultFramework: keyof Results; // Restrict to valid keys of `results`
};

export default function FinishContent({
  resultFramework,
}: FinishContentProps) {
  const router = useRouter();

  // Find the result by its framework name (case insensitive)
  if (typeof resultFramework === 'number') {
    return <ErrorPage></ErrorPage>;
  }

  const winner = results[resultFramework] || results.react; // Default to React if not found

  return (
    <div className="w-[600px] mx-auto mt-[25%] bg-blue-200 border-2 rounded-lg">
      <div className="title text-2xl ml-10 mt-5">
        Your framework! {winner.framework}
      </div>
      <div className="description m-10">
        {winner.answer}
      </div>
      <div className="footer m-10">
        <button
          className="w-30 px-2 border-2 rounded-lg"
          onClick={() => router.push('/')}
        >
          Play again
        </button>
      </div>
    </div>
  );
}
