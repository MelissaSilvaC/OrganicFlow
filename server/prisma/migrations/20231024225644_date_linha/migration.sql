/*
  Warnings:

  - You are about to drop the column `data_cultivo` on the `linha` table. All the data in the column will be lost.
  - You are about to drop the column `especie` on the `linha` table. All the data in the column will be lost.
  - You are about to drop the column `local_cultivo` on the `linha` table. All the data in the column will be lost.
  - You are about to drop the column `lote` on the `linha` table. All the data in the column will be lost.
  - Added the required column `date` to the `linha` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `linha` DROP COLUMN `data_cultivo`,
    DROP COLUMN `especie`,
    DROP COLUMN `local_cultivo`,
    DROP COLUMN `lote`,
    ADD COLUMN `date` VARCHAR(191) NOT NULL;
