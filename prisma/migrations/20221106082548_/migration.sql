-- DropForeignKey
ALTER TABLE `Option` DROP FOREIGN KEY `Option_routeId_fkey`;

-- AlterTable
ALTER TABLE `Option` MODIFY `routeId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Option` ADD CONSTRAINT `Option_routeId_fkey` FOREIGN KEY (`routeId`) REFERENCES `Route`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
