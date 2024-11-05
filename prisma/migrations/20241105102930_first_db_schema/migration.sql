-- CreateTable
CREATE TABLE "Questions" (
    "id" SERIAL NOT NULL,
    "quizz_id" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entries" (
    "id" SERIAL NOT NULL,
    "quizz_id" INTEGER NOT NULL,
    "angular" INTEGER NOT NULL,
    "vue" INTEGER NOT NULL,
    "svelte" INTEGER NOT NULL,
    "react" INTEGER NOT NULL,

    CONSTRAINT "Entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quizzs" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Quizzs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_quizz_id_fkey" FOREIGN KEY ("quizz_id") REFERENCES "Quizzs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entries" ADD CONSTRAINT "Entries_quizz_id_fkey" FOREIGN KEY ("quizz_id") REFERENCES "Quizzs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
