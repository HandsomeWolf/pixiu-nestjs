/*
  Warnings:

  - You are about to drop the column `target` on the `system_menus` table. All the data in the column will be lost.
  - You are about to alter the column `status` on the `system_menus` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Enum(EnumId(0))`.
  - You are about to drop the `user_profiles` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `system_logs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user_profiles` DROP FOREIGN KEY `user_profiles_userId_fkey`;

-- AlterTable
ALTER TABLE `system_logs` ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `system_menus` DROP COLUMN `target`,
    ADD COLUMN `component` VARCHAR(191) NULL,
    ADD COLUMN `isCache` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `isFrame` INTEGER NULL,
    ADD COLUMN `permissionCode` VARCHAR(191) NULL,
    ADD COLUMN `query` VARCHAR(191) NULL,
    MODIFY `status` ENUM('DISABLE', 'ENABLE') NOT NULL DEFAULT 'ENABLE';

-- AlterTable
ALTER TABLE `system_users` ADD COLUMN `loginAt` DATETIME(3) NULL,
    ADD COLUMN `loginIP` VARCHAR(191) NULL,
    ADD COLUMN `remark` VARCHAR(255) NULL,
    ADD COLUMN `type` INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE `user_profiles`;

-- CreateTable
CREATE TABLE `system_user_profiles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nickname` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `avatar` VARCHAR(191) NULL,
    `expired` DATETIME(3) NULL,
    `gender` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `system_user_profiles_email_key`(`email`),
    UNIQUE INDEX `system_user_profiles_phone_key`(`phone`),
    UNIQUE INDEX `system_user_profiles_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `system_dictionary_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `orderNo` INTEGER NOT NULL DEFAULT 500,
    `description` VARCHAR(191) NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `system_dictionary_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `orderNo` INTEGER NOT NULL DEFAULT 500,
    `description` VARCHAR(191) NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `categoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `system_roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `description` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `system_roles_name_key`(`name`),
    UNIQUE INDEX `system_roles_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `system_user_role_relation` (
    `userId` INTEGER NOT NULL,
    `roleId` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `roleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `system_role_menu_relation` (
    `roleId` INTEGER NOT NULL,
    `menuId` INTEGER NOT NULL,

    PRIMARY KEY (`roleId`, `menuId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `system_user_profiles` ADD CONSTRAINT `system_user_profiles_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `system_users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `system_logs` ADD CONSTRAINT `system_logs_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `system_users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `system_dictionary_data` ADD CONSTRAINT `system_dictionary_data_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `system_dictionary_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `system_user_role_relation` ADD CONSTRAINT `system_user_role_relation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `system_users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `system_user_role_relation` ADD CONSTRAINT `system_user_role_relation_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `system_roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `system_role_menu_relation` ADD CONSTRAINT `system_role_menu_relation_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `system_roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `system_role_menu_relation` ADD CONSTRAINT `system_role_menu_relation_menuId_fkey` FOREIGN KEY (`menuId`) REFERENCES `system_menus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
