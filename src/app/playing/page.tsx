import { Prisma, PrismaClient } from '@prisma/client';
import Play from './quizz';
import ErrorPage from './error';

const prisma = new PrismaClient();

type QuizzTypePayload = Prisma.QuizzGetPayload<{
  include: {
    questions: {
      include: {
        options: true;
      };
    };
  };
}>;

export type QuestionsWithOptions =
  QuizzTypePayload['questions'];

export default async function Page() {
  const QUIZZ_ID = 1;

  const quizz = await prisma.quizz.findUnique({
    where: {
      id: QUIZZ_ID,
    },
    include: {
      questions: {
        include: {
          options: true,
        },
      },
    },
  });

  if (quizz === null || quizz.questions.length === 0) {
    return <ErrorPage />;
  }

  // Aquí ya tienes las preguntas con sus opciones incluidas
  const questionsWithOptions: QuestionsWithOptions =
    quizz.questions;

  return <Play data={questionsWithOptions}></Play>;
}
