-- CreateTable
CREATE TABLE `system_menus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `icon` VARCHAR(191) NULL,
    `orderNo` INTEGER NOT NULL DEFAULT 500,
    `parentId` INTEGER NOT NULL DEFAULT 0,
    `type` INTEGER NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `noClosable` INTEGER NOT NULL DEFAULT 0,
    `hidden` INTEGER NOT NULL DEFAULT 0,
    `activeMenu` VARCHAR(191) NULL,
    `guard` VARCHAR(191) NULL,
    `dot` INTEGER NOT NULL DEFAULT 0,
    `badge` VARCHAR(191) NULL,
    `target` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `system_users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 0,
    `orderNo` INTEGER NOT NULL DEFAULT 500,
    `unionId` VARCHAR(191) NULL,
    `openId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `system_users_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_profiles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `avatar` VARCHAR(191) NULL,
    `expired` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_profiles_userId_key`(`userId`),
    UNIQUE INDEX `user_profiles_email_key`(`email`),
    UNIQUE INDEX `user_profiles_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `system_logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `api` VARCHAR(191) NOT NULL,
    `type` INTEGER NOT NULL,
    `status` INTEGER NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `ip` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `system_menus` ADD CONSTRAINT `system_menus_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `system_menus`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_profiles` ADD CONSTRAINT `user_profiles_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `system_users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
