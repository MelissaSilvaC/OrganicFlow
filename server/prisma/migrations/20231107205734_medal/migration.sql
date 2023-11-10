/*
  Warnings:

  - You are about to drop the column `medalha` on the `armazenamento` table. All the data in the column will be lost.
  - You are about to drop the column `medalha` on the `embalagem` table. All the data in the column will be lost.
  - You are about to drop the column `medalha` on the `prod_agri` table. All the data in the column will be lost.
  - You are about to drop the column `medalha` on the `transporte` table. All the data in the column will be lost.
  - You are about to drop the column `medalha` on the `varejo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `armazenamento` DROP COLUMN `medalha`;

-- AlterTable
ALTER TABLE `embalagem` DROP COLUMN `medalha`;

-- AlterTable
ALTER TABLE `prod_agri` DROP COLUMN `medalha`;

-- AlterTable
ALTER TABLE `transporte` DROP COLUMN `medalha`;

-- AlterTable
ALTER TABLE `varejo` DROP COLUMN `medalha`;
