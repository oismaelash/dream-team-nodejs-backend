/*
  Warnings:

  - Added the required column `distance` to the `Route` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Route` ADD COLUMN `distance` INTEGER NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Route` ADD CONSTRAINT `Route_shipId_fkey` FOREIGN KEY (`shipId`) REFERENCES `Ship`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
