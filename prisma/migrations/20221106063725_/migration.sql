-- DropForeignKey
ALTER TABLE `Route` DROP FOREIGN KEY `Route_travelId_fkey`;

-- AlterTable
ALTER TABLE `Route` MODIFY `travelId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Route` ADD CONSTRAINT `Route_travelId_fkey` FOREIGN KEY (`travelId`) REFERENCES `Travel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
