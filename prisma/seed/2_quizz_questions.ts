import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.quizz.create({
    data: {
      id: 1, // ID del quizz
      name: 'Frameworks',
    },
  });

  // Crear preguntas y opciones
  await prisma.question.createMany({
    data: [
      {
        id: 1,
        quizz_id: 1,
        text: 'How do you usually act at social gatherings?',
        value: 5,
      },
      {
        id: 2,
        quizz_id: 1,
        text: 'What type of music do you prefer?',
        value: 5,
      },
      {
        id: 3,
        quizz_id: 1,
        text: 'How do you approach solving a complex problem?',
        value: 5,
      },
      {
        id: 4,
        quizz_id: 1,
        text: 'What role do you usually play in a group project?',
        value: 5,
      },
      {
        id: 5,
        quizz_id: 1,
        text: 'How do you usually spend your free time?',
        value: 5,
      },
      {
        id: 6,
        quizz_id: 1,
        text: 'What kind of food do you enjoy the most?',
        value: 5,
      },
      {
        id: 7,
        quizz_id: 1,
        text: 'How would your friends describe you?',
        value: 5,
      },
      {
        id: 8,
        quizz_id: 1,
        text: 'Which type of vacation do you prefer?',
        value: 5,
      },
      {
        id: 9,
        quizz_id: 1,
        text: 'What’s your favorite type of movie?',
        value: 5,
      },
      {
        id: 10,
        quizz_id: 1,
        text: 'How do you usually make decisions?',
        value: 5,
      },
      {
        id: 11,
        quizz_id: 1,
        text: 'What’s your go-to activity at a party?',
        value: 5,
      },
      {
        id: 12,
        quizz_id: 1,
        text: 'What’s your preferred mode of learning?',
        value: 5,
      },
    ],
  });

  await prisma.option.createMany({
    data: [
      // Question 1 options
      {
        question_id: 1,
        content: 'I’m the life of the party!',
        category: 'react',
      },
      {
        question_id: 1,
        content: 'I enjoy deep conversations.',
        category: 'angular',
      },
      {
        question_id: 1,
        content: 'I quietly observe.',
        category: 'vue',
      },
      {
        question_id: 1,
        content: 'I’m usually planning the event.',
        category: 'svelte',
      },

      // Question 2 options
      {
        question_id: 2,
        content: 'Energetic pop or EDM.',
        category: 'react',
      },
      {
        question_id: 2,
        content: 'Calm and relaxing jazz.',
        category: 'vue',
      },
      {
        question_id: 2,
        content: 'Classic rock or alternative.',
        category: 'angular',
      },
      {
        question_id: 2,
        content: 'Experimental indie.',
        category: 'svelte',
      },

      // Question 3 options
      {
        question_id: 3,
        content: 'I follow a structured approach.',
        category: 'angular',
      },
      {
        question_id: 3,
        content:
          'I try different things and see what works.',
        category: 'react',
      },
      {
        question_id: 3,
        content: 'I look for inspiration online.',
        category: 'vue',
      },
      {
        question_id: 3,
        content: 'I come up with my own unique solution.',
        category: 'svelte',
      },

      // Question 4 options
      {
        question_id: 4,
        content: 'I’m the planner and organizer.',
        category: 'svelte',
      },
      {
        question_id: 4,
        content: 'I like supporting others.',
        category: 'vue',
      },
      {
        question_id: 4,
        content: 'I take the lead.',
        category: 'angular',
      },
      {
        question_id: 4,
        content: 'I’m the creative contributor.',
        category: 'react',
      },

      // Question 5 options
      {
        question_id: 5,
        content:
          'I learn new skills or work on personal projects.',
        category: 'angular',
      },
      {
        question_id: 5,
        content: 'I spend time with friends and family.',
        category: 'vue',
      },
      {
        question_id: 5,
        content: 'I explore new places or activities.',
        category: 'react',
      },
      {
        question_id: 5,
        content: 'I pursue creative hobbies.',
        category: 'svelte',
      },

      // Question 6 options
      {
        question_id: 6,
        content: 'I love trying unique, fusion cuisines.',
        category: 'react',
      },
      {
        question_id: 6,
        content: 'I enjoy classic comfort food.',
        category: 'angular',
      },
      {
        question_id: 6,
        content: 'I like healthy and fresh options.',
        category: 'vue',
      },
      {
        question_id: 6,
        content: 'I experiment with new recipes.',
        category: 'svelte',
      },

      // Question 7 options
      {
        question_id: 7,
        content: 'Creative and spontaneous.',
        category: 'react',
      },
      {
        question_id: 7,
        content: 'Reliable and organized.',
        category: 'angular',
      },
      {
        question_id: 7,
        content: 'Thoughtful and considerate.',
        category: 'vue',
      },
      {
        question_id: 7,
        content: 'Unique and adventurous.',
        category: 'svelte',
      },

      // Question 8 options
      {
        question_id: 8,
        content: 'An adventurous backpacking trip.',
        category: 'react',
      },
      {
        question_id: 8,
        content: 'A relaxing beach resort.',
        category: 'vue',
      },
      {
        question_id: 8,
        content: 'A cultural and historical tour.',
        category: 'angular',
      },
      {
        question_id: 8,
        content: 'A creative retreat in nature.',
        category: 'svelte',
      },

      // Question 9 options
      {
        question_id: 9,
        content: 'Action-packed thrillers.',
        category: 'angular',
      },
      {
        question_id: 9,
        content: 'Artistic and thought-provoking films.',
        category: 'svelte',
      },
      {
        question_id: 9,
        content: 'Feel-good comedies.',
        category: 'react',
      },
      {
        question_id: 9,
        content: 'Heartwarming dramas.',
        category: 'vue',
      },

      // Question 10 options
      {
        question_id: 10,
        content: 'I weigh all options carefully.',
        category: 'angular',
      },
      {
        question_id: 10,
        content: 'I go with what feels right.',
        category: 'vue',
      },
      {
        question_id: 10,
        content: 'I decide quickly and move on.',
        category: 'react',
      },
      {
        question_id: 10,
        content: 'I trust my intuition.',
        category: 'svelte',
      },

      // Question 11 options
      {
        question_id: 11,
        content: 'I hit the dance floor!',
        category: 'react',
      },
      {
        question_id: 11,
        content: 'I chat with close friends.',
        category: 'vue',
      },
      {
        question_id: 11,
        content: 'I network and meet new people.',
        category: 'angular',
      },
      {
        question_id: 11,
        content: 'I observe and enjoy the vibe.',
        category: 'svelte',
      },

      // Question 12 options
      {
        question_id: 12,
        content: 'I prefer hands-on practice.',
        category: 'angular',
      },
      {
        question_id: 12,
        content:
          'I enjoy learning through videos and tutorials.',
        category: 'vue',
      },
      {
        question_id: 12,
        content: 'I like group discussions.',
        category: 'react',
      },
      {
        question_id: 12,
        content: 'I explore topics on my own.',
        category: 'svelte',
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
