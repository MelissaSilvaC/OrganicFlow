/*
  Warnings:

  - You are about to drop the column `photo` on the `linha` table. All the data in the column will be lost.
  - Added the required column `dt_validade` to the `varejo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `armazenamento` MODIFY `dt_entrada` VARCHAR(191) NOT NULL,
    MODIFY `dt_saida` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `embalagem` MODIFY `dt_processamento` VARCHAR(191) NOT NULL,
    MODIFY `dt_embalagem` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `linha` DROP COLUMN `photo`;

-- AlterTable
ALTER TABLE `prod_agri` MODIFY `dt_plantio` VARCHAR(191) NOT NULL,
    MODIFY `dt_colheita` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `transporte` MODIFY `dt_carregamento` VARCHAR(191) NOT NULL,
    MODIFY `dt_descarregamento` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `varejo` ADD COLUMN `dt_validade` VARCHAR(191) NOT NULL,
    MODIFY `dt_chegada` VARCHAR(191) NOT NULL;
