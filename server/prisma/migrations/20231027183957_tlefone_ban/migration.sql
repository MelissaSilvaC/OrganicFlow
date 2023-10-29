/*
  Warnings:

  - You are about to drop the column `numero` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `numero`,
    ADD COLUMN `telefone` VARCHAR(191) NULL;
