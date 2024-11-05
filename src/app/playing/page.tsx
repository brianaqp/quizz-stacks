import Play from "./game"
import { PrismaClient } from "@prisma/client"


export default async function Page() {
    const displayedComponent: null | React.ReactNode = null;
    
    const prisma = new PrismaClient();

    const quizz = await prisma.quizz.findUnique({ where: {
        id: 1
    }});

    if (!quizz?.id) {
        return null;
    }

    const data = await prisma.questions.findMany({ where: {
        quizz_id: quizz.id
    }});

    return (
        <Play data={data}></Play>
    );
}