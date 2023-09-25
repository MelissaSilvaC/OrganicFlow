/*
  Warnings:

  - You are about to drop the column `id_linha` on the `produto` table. All the data in the column will be lost.
  - Added the required column `id_produto` to the `linha` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `linha` ADD COLUMN `id_produto` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `produto` DROP COLUMN `id_linha`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `medalha` BOOLEAN NOT NULL DEFAULT false;
