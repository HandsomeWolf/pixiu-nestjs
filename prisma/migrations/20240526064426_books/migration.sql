/*
  Warnings:

  - You are about to alter the column `status` on the `system_menus` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Int`.
  - You are about to alter the column `remark` on the `system_users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `system_menus` MODIFY `status` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `system_users` MODIFY `remark` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `books` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
