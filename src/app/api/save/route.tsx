// /app/api/saveData/route.js
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    const data = await request.json();
    try {
        console.log(data, "inside request!")
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: "Error" }), { status: 500 });
    }
}
