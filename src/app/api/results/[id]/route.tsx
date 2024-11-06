import { $Enums, PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: { id: string };
  },
): Promise<NextResponse> {
  try {
    // Get the ID from the params
    const { id } = await params;

    // Fetch the entry from the database using Prisma
    const entry = await prisma.entry.findFirst({
      where: {
        id: +id, // Ensure ID is treated as a number
      },
    });

    // If no entry found, return a 404 response
    if (!entry) {
      return NextResponse.json(
        { success: false },
        { status: 404 },
      );
    }

    // Variables to track the highest value
    let max = 0;
    let top: $Enums.FrameworkCategory | undefined;

    // Check for the highest framework value
    const props: $Enums.FrameworkCategory[] = [
      'angular',
      'vue',
      'react',
      'svelte',
    ];

    for (let prop of props) {
      const value = entry[prop];
      if (value > max) {
        max = value;
        top = prop;
      }
    }

    // Return the top framework as the response
    return NextResponse.json(
      {
        success: true,
        data: top,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: 'Error' },
      { status: 500 },
    );
  }
}
