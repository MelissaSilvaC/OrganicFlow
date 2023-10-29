/*
  Warnings:

  - You are about to drop the column `company` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `company`,
    ADD COLUMN `ban` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `numero` VARCHAR(191) NULL;
