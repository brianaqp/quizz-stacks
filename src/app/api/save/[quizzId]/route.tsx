// /app/api/saveData/route.js
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest, { params }: { 
    params: Promise<{ quizzId: string }>
}) {
    try {
        const data = await request.json() as { // Add a proper typo
            [framework: string]: number
        };

        const quizzId = (await params).quizzId;

        const result = await prisma.entries.createManyAndReturn({
            data: {
                quizz_id: +quizzId,
                angular: data['angular'],
                vue: data['vue'],
                react: data['react'],
                svelte: data['svelte']
            },
        })


        if (result.length === 0) {
            return new Response(JSON.stringify({ success: false }), { status: 404 });
        }
    
        return new Response(JSON.stringify({ success: true, data: result[0]  }), { status: 200 });
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ success: false, error: "Error" }), { status: 500 });
    }
}
