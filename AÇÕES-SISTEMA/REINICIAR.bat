@echo off
echo ============================================
echo 🔄 Reiniciando Sistema da Igreja
echo ============================================
timeout /t 1 >nul

docker compose down
docker compose up -d

if %errorlevel%==0 (
    echo ✅ Sistema reiniciado com sucesso!
    echo 🌐 Acesse em: http://localhost
) else (
    echo ❌ Erro ao reiniciar o sistema.
)

pause
