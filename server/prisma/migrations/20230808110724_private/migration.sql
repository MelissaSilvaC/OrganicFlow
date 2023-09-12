/*
  Warnings:

  - You are about to drop the column `user_alvo` on the `feed` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `armazenamento` DROP FOREIGN KEY `Armazenamento_id_linha_fkey`;

-- DropForeignKey
ALTER TABLE `armazenamento` DROP FOREIGN KEY `Armazenamento_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `embalagem` DROP FOREIGN KEY `Embalagem_id_linha_fkey`;

-- DropForeignKey
ALTER TABLE `embalagem` DROP FOREIGN KEY `Embalagem_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `prod_agri` DROP FOREIGN KEY `Prod_Agri_id_linha_fkey`;

-- DropForeignKey
ALTER TABLE `prod_agri` DROP FOREIGN KEY `Prod_Agri_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `transporte` DROP FOREIGN KEY `Transporte_id_linha_fkey`;

-- DropForeignKey
ALTER TABLE `transporte` DROP FOREIGN KEY `Transporte_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `varejo` DROP FOREIGN KEY `Varejo_id_linha_fkey`;

-- DropForeignKey
ALTER TABLE `varejo` DROP FOREIGN KEY `Varejo_id_user_fkey`;

-- AlterTable
ALTER TABLE `armazenamento` ADD COLUMN `private` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `embalagem` ADD COLUMN `private` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `feed` DROP COLUMN `user_alvo`;

-- AlterTable
ALTER TABLE `prod_agri` ADD COLUMN `private` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `transporte` ADD COLUMN `private` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `varejo` ADD COLUMN `private` BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE `prod_agri` ADD CONSTRAINT `prod_agri_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `prod_agri` ADD CONSTRAINT `prod_agri_id_linha_fkey` FOREIGN KEY (`id_linha`) REFERENCES `linha`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `embalagem` ADD CONSTRAINT `embalagem_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `embalagem` ADD CONSTRAINT `embalagem_id_linha_fkey` FOREIGN KEY (`id_linha`) REFERENCES `linha`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transporte` ADD CONSTRAINT `transporte_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transporte` ADD CONSTRAINT `transporte_id_linha_fkey` FOREIGN KEY (`id_linha`) REFERENCES `linha`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `armazenamento` ADD CONSTRAINT `armazenamento_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `armazenamento` ADD CONSTRAINT `armazenamento_id_linha_fkey` FOREIGN KEY (`id_linha`) REFERENCES `linha`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `varejo` ADD CONSTRAINT `varejo_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `varejo` ADD CONSTRAINT `varejo_id_linha_fkey` FOREIGN KEY (`id_linha`) REFERENCES `linha`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
