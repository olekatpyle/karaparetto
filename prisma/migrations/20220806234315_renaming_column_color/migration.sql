/*
  Warnings:

  - You are about to drop the column `color` on the `Color` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[hex]` on the table `Color` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `hex` to the `Color` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Color_color_key` ON `Color`;

-- AlterTable
ALTER TABLE `Color` DROP COLUMN `color`,
    ADD COLUMN `hex` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Color_hex_key` ON `Color`(`hex`);
