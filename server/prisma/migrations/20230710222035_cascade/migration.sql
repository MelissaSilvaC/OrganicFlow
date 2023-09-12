-- DropForeignKey
ALTER TABLE `denuncia` DROP FOREIGN KEY `denuncia_id_user_fkey`;

-- AddForeignKey
ALTER TABLE `denuncia` ADD CONSTRAINT `denuncia_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
