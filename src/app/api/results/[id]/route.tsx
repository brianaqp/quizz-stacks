// /app/api/saveData/route.js
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

type Options = 'vue' | 'angular' | 'react' | 'svelte';

export async function GET(request: NextRequest, { params }: { 
    params: Promise<{ id: string }>
}) {
    try {
        const id = (await params).id;

        const entry = await prisma.entries.findFirst({
            where: {
                id: +id
            }
        });

        if (entry === null) {
            return new Response(JSON.stringify({ success: false}), { status: 404 })
        }

        let max = 0;
        let top;
        const props = ['angular', 'vue', 'react', 'svelte'] as Options[];
        for (let prop of props) {
            const value = entry[prop];
            if (entry[prop] > max) {
                max = value;
                top = prop;
            };
        }

        return new Response(JSON.stringify({ success: true, data: top }), { status: 200 });

    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ success: false, error: "Error" }), { status: 500 });
    }
}
