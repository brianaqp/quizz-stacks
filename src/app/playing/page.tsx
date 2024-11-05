import Play from "./game"
import { PrismaClient } from "@prisma/client"


export default async function Page() {
    const prisma = new PrismaClient();
    const data = await prisma.question.findMany();
    await prisma.$disconnect();
    return (<Play data={data}></Play>)
}