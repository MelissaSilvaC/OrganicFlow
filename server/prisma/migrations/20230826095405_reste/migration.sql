/*
  Warnings:

  - You are about to drop the column `valido` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `armazenamento_id_linha_fkey` ON `armazenamento`;

-- DropIndex
DROP INDEX `armazenamento_id_user_fkey` ON `armazenamento`;

-- DropIndex
DROP INDEX `denuncia_id_user_fkey` ON `denuncia`;

-- DropIndex
DROP INDEX `embalagem_id_linha_fkey` ON `embalagem`;

-- DropIndex
DROP INDEX `embalagem_id_user_fkey` ON `embalagem`;

-- DropIndex
DROP INDEX `feed_id_user_fkey` ON `feed`;

-- DropIndex
DROP INDEX `prod_agri_id_linha_fkey` ON `prod_agri`;

-- DropIndex
DROP INDEX `prod_agri_id_user_fkey` ON `prod_agri`;

-- DropIndex
DROP INDEX `role_permission_id_permission_fkey` ON `role_permission`;

-- DropIndex
DROP INDEX `role_permission_id_role_fkey` ON `role_permission`;

-- DropIndex
DROP INDEX `transporte_id_linha_fkey` ON `transporte`;

-- DropIndex
DROP INDEX `transporte_id_user_fkey` ON `transporte`;

-- DropIndex
DROP INDEX `user_permission_id_permission_fkey` ON `user_permission`;

-- DropIndex
DROP INDEX `user_permission_id_user_fkey` ON `user_permission`;

-- DropIndex
DROP INDEX `user_role_id_role_fkey` ON `user_role`;

-- DropIndex
DROP INDEX `user_role_id_user_fkey` ON `user_role`;

-- DropIndex
DROP INDEX `varejo_id_linha_fkey` ON `varejo`;

-- DropIndex
DROP INDEX `varejo_id_user_fkey` ON `varejo`;

-- AlterTable
ALTER TABLE `linha` MODIFY `qrcode` VARCHAR(10000) NULL;

-- AlterTable
ALTER TABLE `user_role` ADD COLUMN `responsavel_email` VARCHAR(191) NOT NULL DEFAULT 'none';

-- AlterTable
ALTER TABLE `users` DROP COLUMN `valido`,
    ADD COLUMN `gerente` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `photo` VARCHAR(191) NULL;
