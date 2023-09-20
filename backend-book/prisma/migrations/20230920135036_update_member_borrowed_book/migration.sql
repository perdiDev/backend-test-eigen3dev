-- DropForeignKey
ALTER TABLE "Member_Borrowed_Book" DROP CONSTRAINT "Member_Borrowed_Book_bookCode_fkey";

-- DropForeignKey
ALTER TABLE "Member_Borrowed_Book" DROP CONSTRAINT "Member_Borrowed_Book_memberCode_fkey";

-- AlterTable
ALTER TABLE "Member_Borrowed_Book" ALTER COLUMN "borrowedAt" DROP NOT NULL,
ALTER COLUMN "returnAt" DROP NOT NULL,
ALTER COLUMN "bookCode" DROP NOT NULL,
ALTER COLUMN "memberCode" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Member_Borrowed_Book" ADD CONSTRAINT "Member_Borrowed_Book_bookCode_fkey" FOREIGN KEY ("bookCode") REFERENCES "Book"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member_Borrowed_Book" ADD CONSTRAINT "Member_Borrowed_Book_memberCode_fkey" FOREIGN KEY ("memberCode") REFERENCES "Member"("code") ON DELETE SET NULL ON UPDATE CASCADE;
