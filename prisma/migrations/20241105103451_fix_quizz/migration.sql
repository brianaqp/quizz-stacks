/*
  Warnings:

  - You are about to drop the `Quizzs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Entries" DROP CONSTRAINT "Entries_quizz_id_fkey";

-- DropForeignKey
ALTER TABLE "Questions" DROP CONSTRAINT "Questions_quizz_id_fkey";

-- DropTable
DROP TABLE "Quizzs";

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_quizz_id_fkey" FOREIGN KEY ("quizz_id") REFERENCES "Quizz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entries" ADD CONSTRAINT "Entries_quizz_id_fkey" FOREIGN KEY ("quizz_id") REFERENCES "Quizz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
