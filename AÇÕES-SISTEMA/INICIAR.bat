@echo off
echo ============================================
echo 🟢 Iniciando Sistema da Igreja
echo ============================================
timeout /t 1 >nul

docker compose up -d

if %errorlevel%==0 (
    echo ✅ Sistema iniciado com sucesso!
    echo 🌐 Acesse em: http://localhost
) else (
    echo ❌ Erro ao iniciar o sistema. Verifique o Docker.
)

pause
