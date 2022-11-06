/*
  Warnings:

  - You are about to drop the column `shipId` on the `Route` table. All the data in the column will be lost.
  - Made the column `travelId` on table `Route` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `shipId` to the `Travel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Route` DROP FOREIGN KEY `Route_shipId_fkey`;

-- DropForeignKey
ALTER TABLE `Route` DROP FOREIGN KEY `Route_travelId_fkey`;

-- AlterTable
ALTER TABLE `Route` DROP COLUMN `shipId`,
    MODIFY `travelId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Travel` ADD COLUMN `shipId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Travel` ADD CONSTRAINT `Travel_shipId_fkey` FOREIGN KEY (`shipId`) REFERENCES `Ship`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Route` ADD CONSTRAINT `Route_travelId_fkey` FOREIGN KEY (`travelId`) REFERENCES `Travel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
