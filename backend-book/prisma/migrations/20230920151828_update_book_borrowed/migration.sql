/*
  Warnings:

  - The primary key for the `Member_Borrowed_Book` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Member_Borrowed_Book` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[bookCode,memberCode]` on the table `Member_Borrowed_Book` will be added. If there are existing duplicate values, this will fail.
  - Made the column `bookCode` on table `Member_Borrowed_Book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `memberCode` on table `Member_Borrowed_Book` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Member_Borrowed_Book" DROP CONSTRAINT "Member_Borrowed_Book_bookCode_fkey";

-- DropForeignKey
ALTER TABLE "Member_Borrowed_Book" DROP CONSTRAINT "Member_Borrowed_Book_memberCode_fkey";

-- AlterTable
ALTER TABLE "Member_Borrowed_Book" DROP CONSTRAINT "Member_Borrowed_Book_pkey",
DROP COLUMN "id",
ALTER COLUMN "bookCode" SET NOT NULL,
ALTER COLUMN "memberCode" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Member_Borrowed_Book_bookCode_memberCode_key" ON "Member_Borrowed_Book"("bookCode", "memberCode");

-- AddForeignKey
ALTER TABLE "Member_Borrowed_Book" ADD CONSTRAINT "Member_Borrowed_Book_bookCode_fkey" FOREIGN KEY ("bookCode") REFERENCES "Book"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member_Borrowed_Book" ADD CONSTRAINT "Member_Borrowed_Book_memberCode_fkey" FOREIGN KEY ("memberCode") REFERENCES "Member"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
