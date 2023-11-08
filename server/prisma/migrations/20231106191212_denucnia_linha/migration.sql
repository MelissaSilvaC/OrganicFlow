/*
  Warnings:

  - Added the required column `id_linha` to the `denuncia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stage` to the `denuncia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `denuncia` ADD COLUMN `id_linha` INTEGER NOT NULL,
    ADD COLUMN `stage` VARCHAR(191) NOT NULL;
