/*
  Warnings:

  - You are about to drop the `ProductOnCart` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `product_id` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductOnCart" DROP CONSTRAINT "ProductOnCart_cartId_fkey";

-- DropForeignKey
ALTER TABLE "ProductOnCart" DROP CONSTRAINT "ProductOnCart_productId_fkey";

-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "product_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "ProductOnCart";
