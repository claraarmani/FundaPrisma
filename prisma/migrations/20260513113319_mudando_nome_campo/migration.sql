/*
  Warnings:

  - You are about to drop the column `satus` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `satus`,
    ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT true;
