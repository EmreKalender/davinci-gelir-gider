-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "password" TEXT,
    "usertype" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gider" (
    "id" SERIAL NOT NULL,
    "ay" TEXT NOT NULL,
    "yil" INTEGER NOT NULL,
    "sube" TEXT NOT NULL,
    "kategori2" TEXT NOT NULL,
    "kategori3" TEXT NOT NULL,
    "tip" TEXT NOT NULL,
    "miktar" INTEGER NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "Gider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gelir" (
    "id" SERIAL NOT NULL,
    "ay" TEXT NOT NULL,
    "yil" INTEGER NOT NULL,
    "sube" TEXT NOT NULL,
    "kategori" TEXT NOT NULL,
    "miktar" INTEGER NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "Gelir_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Gider" ADD CONSTRAINT "Gider_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gelir" ADD CONSTRAINT "Gelir_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
