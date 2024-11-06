import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

// Define the shape of the data you expect in the request
type FrameworkData = {
  angular: number;
  vue: number;
  react: number;
  svelte: number;
};

export async function POST(
  request: NextRequest,
  {
    params,
  }: {
    params: { quizzId: string };
  },
): Promise<NextResponse> {
  try {
    // Parse the JSON body of the request
    const data = (await request.json()) as FrameworkData;

    const quizzId = (await params).quizzId;

    // Create entries in the database
    const result = await prisma.entry.createManyAndReturn({
      data: [
        {
          quizz_id: +quizzId, // Ensure quizzId is treated as a number
          angular: data.angular,
          vue: data.vue,
          react: data.react,
          svelte: data.svelte,
        },
      ],
    });

    if (result.length === 0) {
      return NextResponse.json(
        { success: false },
        { status: 404 }
      );
    }

    console.log(data)

    return NextResponse.json(
      {
        success: true,
        data: result[0],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: 'Error' },
      { status: 500 }
    );
  }
}
