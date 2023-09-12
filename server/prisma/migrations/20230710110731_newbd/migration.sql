/*
  Warnings:

  - You are about to drop the `user_permission` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `photo` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user_permission` DROP FOREIGN KEY `user_permission_id_permission_fkey`;

-- DropForeignKey
ALTER TABLE `user_permission` DROP FOREIGN KEY `user_permission_id_user_fkey`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `cnpj` VARCHAR(191) NULL,
    ADD COLUMN `photo` VARCHAR(191) NOT NULL,
    ADD COLUMN `valido` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `company` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `user_permission`;

-- CreateTable
CREATE TABLE `denuncia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `alvo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Linha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `local_cultivo` VARCHAR(191) NOT NULL,
    `especie` VARCHAR(191) NOT NULL,
    `data_cultivo` VARCHAR(191) NOT NULL,
    `lote` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Relatorio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `id_linha` INTEGER NOT NULL,
    `etapa` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `feed` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `user_alvo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `denuncia` ADD CONSTRAINT `denuncia_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Relatorio` ADD CONSTRAINT `Relatorio_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Relatorio` ADD CONSTRAINT `Relatorio_id_linha_fkey` FOREIGN KEY (`id_linha`) REFERENCES `Linha`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `feed` ADD CONSTRAINT `feed_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
