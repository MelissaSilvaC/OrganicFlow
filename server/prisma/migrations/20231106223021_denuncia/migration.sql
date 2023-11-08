/*
  Warnings:

  - Added the required column `argumento` to the `denuncia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `denuncia` ADD COLUMN `argumento` VARCHAR(191) NOT NULL;
