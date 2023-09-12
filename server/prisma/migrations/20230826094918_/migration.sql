-- DropForeignKey
ALTER TABLE `armazenamento` DROP FOREIGN KEY `armazenamento_id_linha_fkey`;

-- DropForeignKey
ALTER TABLE `armazenamento` DROP FOREIGN KEY `armazenamento_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `denuncia` DROP FOREIGN KEY `denuncia_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `embalagem` DROP FOREIGN KEY `embalagem_id_linha_fkey`;

-- DropForeignKey
ALTER TABLE `embalagem` DROP FOREIGN KEY `embalagem_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `feed` DROP FOREIGN KEY `feed_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `prod_agri` DROP FOREIGN KEY `prod_agri_id_linha_fkey`;

-- DropForeignKey
ALTER TABLE `prod_agri` DROP FOREIGN KEY `prod_agri_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `role_permission` DROP FOREIGN KEY `role_permission_id_permission_fkey`;

-- DropForeignKey
ALTER TABLE `role_permission` DROP FOREIGN KEY `role_permission_id_role_fkey`;

-- DropForeignKey
ALTER TABLE `transporte` DROP FOREIGN KEY `transporte_id_linha_fkey`;

-- DropForeignKey
ALTER TABLE `transporte` DROP FOREIGN KEY `transporte_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `user_permission` DROP FOREIGN KEY `user_permission_id_permission_fkey`;

-- DropForeignKey
ALTER TABLE `user_permission` DROP FOREIGN KEY `user_permission_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `user_role` DROP FOREIGN KEY `user_role_id_role_fkey`;

-- DropForeignKey
ALTER TABLE `user_role` DROP FOREIGN KEY `user_role_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `varejo` DROP FOREIGN KEY `varejo_id_linha_fkey`;

-- DropForeignKey
ALTER TABLE `varejo` DROP FOREIGN KEY `varejo_id_user_fkey`;
