/*
  Warnings:

  - Added the required column `date` to the `armazenamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `embalagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `prod_agri` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `transporte` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `varejo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `armazenamento` ADD COLUMN `date` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `embalagem` ADD COLUMN `date` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `prod_agri` ADD COLUMN `date` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `transporte` ADD COLUMN `date` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `varejo` ADD COLUMN `date` VARCHAR(191) NOT NULL;
