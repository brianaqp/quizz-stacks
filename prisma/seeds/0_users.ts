import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "brian",
      email: "brian@mail.com",
      birthday: new Date("1999/12/27").toISOString(),
    },
  });
}

main();
