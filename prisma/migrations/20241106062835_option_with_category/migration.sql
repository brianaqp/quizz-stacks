/*
  Warnings:

  - Added the required column `category` to the `Options` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "FrameworkCategory" AS ENUM ('angular', 'vue', 'svelte', 'react');

-- AlterTable
ALTER TABLE "Options" ADD COLUMN     "category" "FrameworkCategory" NOT NULL;
