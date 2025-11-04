/*
  Warnings:

  - You are about to drop the column `tempoNaFuncao` on the `membros` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."auxiliar_professor" DROP CONSTRAINT "auxiliar_professor_membroId_fkey";

-- DropForeignKey
ALTER TABLE "public"."conselho_fiscal" DROP CONSTRAINT "conselho_fiscal_membroId_fkey";

-- DropForeignKey
ALTER TABLE "public"."diretoria_igreja" DROP CONSTRAINT "diretoria_igreja_membroId_fkey";

-- DropForeignKey
ALTER TABLE "public"."suplentes" DROP CONSTRAINT "suplentes_membroId_fkey";

-- AlterTable
ALTER TABLE "membros" DROP COLUMN "tempoNaFuncao";

-- AddForeignKey
ALTER TABLE "conselho_fiscal" ADD CONSTRAINT "conselho_fiscal_membroId_fkey" FOREIGN KEY ("membroId") REFERENCES "membros"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suplentes" ADD CONSTRAINT "suplentes_membroId_fkey" FOREIGN KEY ("membroId") REFERENCES "membros"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diretoria_igreja" ADD CONSTRAINT "diretoria_igreja_membroId_fkey" FOREIGN KEY ("membroId") REFERENCES "membros"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auxiliar_professor" ADD CONSTRAINT "auxiliar_professor_membroId_fkey" FOREIGN KEY ("membroId") REFERENCES "membros"("id") ON DELETE CASCADE ON UPDATE CASCADE;
