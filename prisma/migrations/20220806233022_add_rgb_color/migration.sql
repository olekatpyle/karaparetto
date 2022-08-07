/*
  Warnings:

  - Added the required column `b` to the `Color` table without a default value. This is not possible if the table is not empty.
  - Added the required column `g` to the `Color` table without a default value. This is not possible if the table is not empty.
  - Added the required column `r` to the `Color` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Color` ADD COLUMN `b` INTEGER NOT NULL,
    ADD COLUMN `g` INTEGER NOT NULL,
    ADD COLUMN `r` INTEGER NOT NULL;
