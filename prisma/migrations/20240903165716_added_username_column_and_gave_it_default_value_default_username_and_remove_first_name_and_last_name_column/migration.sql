/*
  Warnings:

  - You are about to alter the column `username` on the `UserIDInfo` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE "UserIDInfo" ALTER COLUMN "username" SET DATA TYPE VARCHAR(100);
