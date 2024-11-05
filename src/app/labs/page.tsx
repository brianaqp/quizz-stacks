'use server';

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function Query() {
    const data =  await prisma.user.findMany();
    await prisma.$disconnect();
    return data;
}

export default async function Labs() {
    console.log(await Query());
    return (
        <p>Labs working</p>
    )
}