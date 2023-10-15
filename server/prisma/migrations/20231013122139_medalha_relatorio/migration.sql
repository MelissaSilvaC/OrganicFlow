/*
  Warnings:

  - You are about to drop the column `medalha` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `armazenamento` ADD COLUMN `medalha` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `embalagem` ADD COLUMN `medalha` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `prod_agri` ADD COLUMN `medalha` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `transporte` ADD COLUMN `medalha` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `medalha`,
    ADD COLUMN `local` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `varejo` ADD COLUMN `medalha` BOOLEAN NOT NULL DEFAULT false;
