'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { QuestionsWithOptions } from './page'; // Importamos el tipo QuestionsWithOptions
import { $Enums } from '@prisma/client';
import api from  "@/app/api/axios";

export default function Play({
  data,
}: {
  data: QuestionsWithOptions;
}) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] =
    useState<$Enums.FrameworkCategory | null>(null);
  const [result, setResult] = useState({
    angular: 0,
    vue: 0,
    svelte: 0,
    react: 0,
  });

  const router = useRouter();

  // Handlers
  const handleAnswerChange = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target
      .value as $Enums.FrameworkCategory; // Type guard
    if (value === answer) {
      setAnswer(null);
    } else {
      setAnswer(value);
    }
  };

  const handleNextClick = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.stopPropagation();

    // 1. Form validation
    if (answer === null) {
      // Show some error
      console.error('Error! Answer is null');
    } else {
      // 2. Store answer (adding the value of the selected framework to the result)
      const selectedOption = data[index].options.find(
        (option) => option.category === answer,
      );
      if (selectedOption) {
        result[answer] += data[index].value;
        setResult({
          ...result,
        });
      }

      // 3. Move to the next question or submit
      const nextId = index + 1;
      if (nextId >= data.length) {
        // If it's the last question, submit the results
        const url = '/api/save/' + data[0].quizz_id;

        api.post(url, result)
          .then((res) => {
            if (res.status) {
              router.push('/finish?entryId=' + res.data.data.id);
            }
          });
      } else {
        setAnswer(null);
        setIndex(nextId);
      }
    }
  };

  // HTML
  return (
    <div className="text-center bg-blue-300 mt-[10%] w-[400px] h-[500px] mx-auto border-2 justify-around rounded-r-md border-green-400 flex flex-col gap-[50px] flex-nowrap">
      <div className="header">
        <p className="text-2xl">
          Question number {data[index].id}
        </p>
      </div>
      <div className="body mx-10">
        <span className="text-xl">{data[index].text}</span>
      </div>
      <div className="options flex flex-col gap-2">
        {data[index].options.map((option) => (
          <label key={option.id}>
            <input
              type="checkbox"
              checked={answer === option.category}
              onChange={handleAnswerChange}
              value={option.category}
            />
            &nbsp;{option.content}
          </label>
        ))}
      </div>
      <button type="button" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
}
