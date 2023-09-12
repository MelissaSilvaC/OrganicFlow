/*
  Warnings:

  - You are about to drop the `relatorio` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `relatorio` DROP FOREIGN KEY `Relatorio_id_linha_fkey`;

-- DropForeignKey
ALTER TABLE `relatorio` DROP FOREIGN KEY `Relatorio_id_user_fkey`;

-- DropTable
DROP TABLE `relatorio`;

-- CreateTable
CREATE TABLE `Prod_Agri` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `id_linha` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `local` VARCHAR(191) NOT NULL,
    `dt_plantio` DATETIME(3) NOT NULL,
    `dt_colheita` DATETIME(3) NOT NULL,
    `insumo` VARCHAR(191) NOT NULL,
    `praticas` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Embalagem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `id_linha` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `local` VARCHAR(191) NOT NULL,
    `ingrediente` VARCHAR(191) NOT NULL,
    `praticas` VARCHAR(191) NOT NULL,
    `dt_processamento` DATETIME(3) NOT NULL,
    `dt_embalagem` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transporte` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `id_linha` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `praticas` VARCHAR(191) NOT NULL,
    `dt_carregamento` DATETIME(3) NOT NULL,
    `dt_descarregamento` DATETIME(3) NOT NULL,
    `origem` VARCHAR(191) NOT NULL,
    `destino` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Armazenamento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `id_linha` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `local` VARCHAR(191) NOT NULL,
    `praticas` VARCHAR(191) NOT NULL,
    `responsavel` VARCHAR(191) NOT NULL,
    `dt_entrada` DATETIME(3) NOT NULL,
    `dt_saida` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Varejo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `id_linha` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `local` VARCHAR(191) NOT NULL,
    `dt_chegada` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Prod_Agri` ADD CONSTRAINT `Prod_Agri_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Prod_Agri` ADD CONSTRAINT `Prod_Agri_id_linha_fkey` FOREIGN KEY (`id_linha`) REFERENCES `Linha`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Embalagem` ADD CONSTRAINT `Embalagem_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Embalagem` ADD CONSTRAINT `Embalagem_id_linha_fkey` FOREIGN KEY (`id_linha`) REFERENCES `Linha`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transporte` ADD CONSTRAINT `Transporte_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transporte` ADD CONSTRAINT `Transporte_id_linha_fkey` FOREIGN KEY (`id_linha`) REFERENCES `Linha`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Armazenamento` ADD CONSTRAINT `Armazenamento_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Armazenamento` ADD CONSTRAINT `Armazenamento_id_linha_fkey` FOREIGN KEY (`id_linha`) REFERENCES `Linha`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Varejo` ADD CONSTRAINT `Varejo_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Varejo` ADD CONSTRAINT `Varejo_id_linha_fkey` FOREIGN KEY (`id_linha`) REFERENCES `Linha`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
