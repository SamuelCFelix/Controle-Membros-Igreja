@echo off
echo ============================================
echo 📦 Atualizando Sistema da Igreja
echo ============================================
timeout /t 2 >nul

:: Verifica se o Git está instalado
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git não encontrado. Instale o Git antes de continuar.
    echo Download: https://git-scm.com/downloads
    pause
    exit /b
)

:: Verifica se o Docker está ativo
docker info >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker não está rodando. Inicie o Docker Desktop e tente novamente.
    pause
    exit /b
)

echo.
echo 📡 Verificando e baixando atualizações do repositório...
timeout /t 1 >nul

git fetch
git pull https://github.com/SamuelCFelix/Controle-Membros-Igreja.git main

if %errorlevel%==0 (
    echo ✅ Código atualizado com sucesso!
    echo 🛠️  Reconstruindo containers...
    docker compose down
    docker compose up -d --build

    if %errorlevel%==0 (
        echo ✅ Sistema atualizado e rodando!
        echo 🌐 Acesse em: http://localhost
    ) else (
        echo ❌ Erro ao reconstruir containers. Verifique o Docker.
    )
) else (
    echo ❌ Erro ao atualizar o repositório.
)

pause
