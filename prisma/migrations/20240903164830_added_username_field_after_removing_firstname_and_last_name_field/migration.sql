/*
  Warnings:

  - You are about to drop the column `firstName` on the `UserIDInfo` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `UserIDInfo` table. All the data in the column will be lost.
  - Added the required column `username` to the `UserIDInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
-- Step 1: Add the username column as nullable
ALTER TABLE "UserIDInfo" 
ADD COLUMN "username" TEXT;

-- Step 2: Populate the username column for existing rows
UPDATE "UserIDInfo" SET "username" = 'default_username' WHERE "username" IS NULL;

-- Step 3: Make the username column NOT NULL
ALTER TABLE "UserIDInfo"
ALTER COLUMN "username" SET NOT NULL;

-- Step 4: Drop the unnecessary columns
ALTER TABLE "UserIDInfo" 
DROP COLUMN "firstName",
DROP COLUMN "lastName";



