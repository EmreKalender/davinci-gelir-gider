/*
  Warnings:

  - Changed the type of `ay` on the `Gelir` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `ay` on the `Gider` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Gelir" DROP COLUMN "ay",
ADD COLUMN     "ay" INTEGER NOT NULL,
ALTER COLUMN "miktar" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Gider" DROP COLUMN "ay",
ADD COLUMN     "ay" INTEGER NOT NULL,
ALTER COLUMN "miktar" SET DATA TYPE DOUBLE PRECISION;
