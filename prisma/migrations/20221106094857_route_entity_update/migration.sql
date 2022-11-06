/*
  Warnings:

  - Added the required column `consumeFuel` to the `Route` table without a default value. This is not possible if the table is not empty.
  - Added the required column `useFuel` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Route` ADD COLUMN `consumeFuel` INTEGER NOT NULL,
    ADD COLUMN `useFuel` INTEGER NOT NULL;
