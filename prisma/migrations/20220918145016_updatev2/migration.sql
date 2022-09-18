/*
  Warnings:

  - You are about to drop the column `kategori2` on the `Gider` table. All the data in the column will be lost.
  - You are about to drop the column `kategori3` on the `Gider` table. All the data in the column will be lost.
  - You are about to drop the column `tip` on the `Gider` table. All the data in the column will be lost.
  - Added the required column `altkategori` to the `Gider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kategori` to the `Gider` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gider" DROP COLUMN "kategori2",
DROP COLUMN "kategori3",
DROP COLUMN "tip",
ADD COLUMN     "aciklama" TEXT,
ADD COLUMN     "altkategori" TEXT NOT NULL,
ADD COLUMN     "kategori" TEXT NOT NULL;
