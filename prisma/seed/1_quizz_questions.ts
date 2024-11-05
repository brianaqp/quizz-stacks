import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();

  await prisma.quizz.create({
    data: {
      id: 1, // ID del quizz
      name: "Frameworks",
    },
  });
  await prisma.questions.createMany({
    data: [
      {
        id: 1,
        quizz_id: 1, // Relación con el quizz creado
        text: "¿Cuál framework es el mejor para aplicaciones de gran escala?",
        value: 5,
      },
      {
        id: 2,
        quizz_id: 1,
        text: "¿Qué framework tiene la curva de aprendizaje más baja?",
        value: 3,
      },
    ],
  });

  await prisma.entries.create({
    data: {
      id: 1,
      quizz_id: 1,
      angular: 4, // Respuesta puntuada para Angular
      vue: 5, // Respuesta puntuada para Vue
      svelte: 3, // Respuesta puntuada para Svelte
      react: 4, // Respuesta puntuada para React
    },
  });
}

main();
