@echo off
echo ============================================
echo 🟥 Parando Sistema da Igreja
echo ============================================
timeout /t 1 >nul

docker compose down

if %errorlevel%==0 (
    echo ✅ Sistema parado com sucesso!
) else (
    echo ❌ Erro ao parar o sistema.
)

pause
