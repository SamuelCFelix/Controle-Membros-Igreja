-- CreateTable
CREATE TABLE "membros" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dataNascimento" TEXT,
    "sexo" TEXT,
    "telefone" TEXT,
    "situacaoCivil" TEXT,
    "endereco" TEXT,
    "batizado" BOOLEAN NOT NULL DEFAULT false,
    "encontroComDeus" BOOLEAN NOT NULL DEFAULT false,
    "libertacao" BOOLEAN NOT NULL DEFAULT false,
    "discipulado" BOOLEAN NOT NULL DEFAULT false,
    "temDiscipulador" BOOLEAN NOT NULL DEFAULT false,
    "nomeDiscipulador" TEXT,
    "funcaoIgreja" TEXT,
    "liderCelula" BOOLEAN NOT NULL DEFAULT false,
    "professor" BOOLEAN NOT NULL DEFAULT false,
    "classeProfessor" TEXT,
    "dataInicioFuncao" TEXT,
    "tempoNaFuncao" TEXT,
    "treinamentoLideres" BOOLEAN NOT NULL DEFAULT false,
    "trilho" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "membros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conselho_fiscal" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "membroId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "conselho_fiscal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suplentes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "membroId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "suplentes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "diretoria_igreja" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "membroId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "diretoria_igreja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auxiliar_professor" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "membroId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "auxiliar_professor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "conselho_fiscal" ADD CONSTRAINT "conselho_fiscal_membroId_fkey" FOREIGN KEY ("membroId") REFERENCES "membros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suplentes" ADD CONSTRAINT "suplentes_membroId_fkey" FOREIGN KEY ("membroId") REFERENCES "membros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diretoria_igreja" ADD CONSTRAINT "diretoria_igreja_membroId_fkey" FOREIGN KEY ("membroId") REFERENCES "membros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auxiliar_professor" ADD CONSTRAINT "auxiliar_professor_membroId_fkey" FOREIGN KEY ("membroId") REFERENCES "membros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
