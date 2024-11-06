-- CreateTable
CREATE TABLE "Options" (
    "id" SERIAL NOT NULL,
    "question_id" INTEGER NOT NULL,
    "content" VARCHAR(255) NOT NULL,

    CONSTRAINT "Options_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Options" ADD CONSTRAINT "Options_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
