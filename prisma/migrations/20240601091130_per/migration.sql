/*
  Warnings:

  - You are about to drop the `books` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `books`;

-- CreateTable
CREATE TABLE `system_permissions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `action` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    UNIQUE INDEX `system_permissions_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `system_role_permissions_relation` (
    `roleId` INTEGER NOT NULL,
    `permissionId` INTEGER NOT NULL,

    PRIMARY KEY (`roleId`, `permissionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `system_policy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` INTEGER NOT NULL,
    `effect` VARCHAR(191) NOT NULL,
    `action` VARCHAR(191) NOT NULL,
    `subject` VARCHAR(191) NOT NULL,
    `fields` JSON NULL,
    `conditions` JSON NULL,
    `args` JSON NULL,
    `encode` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `system_policy_encode_key`(`encode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `system_role_policies_relation` (
    `roleId` INTEGER NOT NULL,
    `policyId` INTEGER NOT NULL,

    PRIMARY KEY (`roleId`, `policyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `system_permission_polices_relation` (
    `permissionId` INTEGER NOT NULL,
    `policyId` INTEGER NOT NULL,

    PRIMARY KEY (`permissionId`, `policyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `system_role_permissions_relation` ADD CONSTRAINT `system_role_permissions_relation_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `system_roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `system_role_permissions_relation` ADD CONSTRAINT `system_role_permissions_relation_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `system_permissions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `system_role_policies_relation` ADD CONSTRAINT `system_role_policies_relation_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `system_roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `system_role_policies_relation` ADD CONSTRAINT `system_role_policies_relation_policyId_fkey` FOREIGN KEY (`policyId`) REFERENCES `system_policy`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `system_permission_polices_relation` ADD CONSTRAINT `system_permission_polices_relation_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `system_permissions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `system_permission_polices_relation` ADD CONSTRAINT `system_permission_polices_relation_policyId_fkey` FOREIGN KEY (`policyId`) REFERENCES `system_policy`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
