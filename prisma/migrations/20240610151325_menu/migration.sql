/*
  Warnings:

  - You are about to drop the column `orderNo` on the `system_dictionary_category` table. All the data in the column will be lost.
  - You are about to drop the column `orderNo` on the `system_dictionary_data` table. All the data in the column will be lost.
  - You are about to drop the column `activeMenu` on the `system_menus` table. All the data in the column will be lost.
  - You are about to drop the column `badge` on the `system_menus` table. All the data in the column will be lost.
  - You are about to drop the column `dot` on the `system_menus` table. All the data in the column will be lost.
  - You are about to drop the column `guard` on the `system_menus` table. All the data in the column will be lost.
  - You are about to drop the column `hidden` on the `system_menus` table. All the data in the column will be lost.
  - You are about to drop the column `icon` on the `system_menus` table. All the data in the column will be lost.
  - You are about to drop the column `isCache` on the `system_menus` table. All the data in the column will be lost.
  - You are about to drop the column `isFrame` on the `system_menus` table. All the data in the column will be lost.
  - You are about to drop the column `noClosable` on the `system_menus` table. All the data in the column will be lost.
  - You are about to drop the column `orderNo` on the `system_menus` table. All the data in the column will be lost.
  - You are about to drop the column `permissionCode` on the `system_menus` table. All the data in the column will be lost.
  - You are about to drop the column `query` on the `system_menus` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `system_menus` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `system_menus` table. All the data in the column will be lost.
  - You are about to drop the column `orderNo` on the `system_users` table. All the data in the column will be lost.
  - You are about to drop the column `remark` on the `system_users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `system_menus` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `system_dictionary_category` DROP COLUMN `orderNo`,
    ADD COLUMN `sortOrder` INTEGER NOT NULL DEFAULT 500;

-- AlterTable
ALTER TABLE `system_dictionary_data` DROP COLUMN `orderNo`,
    ADD COLUMN `sortOrder` INTEGER NOT NULL DEFAULT 500;

-- AlterTable
ALTER TABLE `system_menus` DROP COLUMN `activeMenu`,
    DROP COLUMN `badge`,
    DROP COLUMN `dot`,
    DROP COLUMN `guard`,
    DROP COLUMN `hidden`,
    DROP COLUMN `icon`,
    DROP COLUMN `isCache`,
    DROP COLUMN `isFrame`,
    DROP COLUMN `noClosable`,
    DROP COLUMN `orderNo`,
    DROP COLUMN `permissionCode`,
    DROP COLUMN `query`,
    DROP COLUMN `status`,
    DROP COLUMN `type`;

-- AlterTable
ALTER TABLE `system_user_profiles` ADD COLUMN `remark` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `system_users` DROP COLUMN `orderNo`,
    DROP COLUMN `remark`,
    ADD COLUMN `sortOrder` INTEGER NOT NULL DEFAULT 500,
    MODIFY `status` INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE `system_menu_meta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `query` VARCHAR(191) NULL,
    `icon` VARCHAR(191) NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 500,
    `type` INTEGER NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `noClosable` INTEGER NOT NULL DEFAULT 0,
    `hidden` INTEGER NOT NULL DEFAULT 0,
    `activeMenu` VARCHAR(191) NULL,
    `guard` VARCHAR(191) NULL,
    `dot` INTEGER NOT NULL DEFAULT 0,
    `badge` VARCHAR(191) NULL,
    `isFrame` INTEGER NULL,
    `isCache` INTEGER NOT NULL DEFAULT 0,
    `menuId` INTEGER NOT NULL,

    UNIQUE INDEX `system_menu_meta_menuId_key`(`menuId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `system_menus_name_key` ON `system_menus`(`name`);

-- AddForeignKey
ALTER TABLE `system_menu_meta` ADD CONSTRAINT `system_menu_meta_menuId_fkey` FOREIGN KEY (`menuId`) REFERENCES `system_menus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
