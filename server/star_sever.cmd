@echo off
echo Iniciando o servidor Node.js...
start cmd /k node server.js

:menu
echo.
echo 1. Encerrar o servidor

set /p opcao=Escolha uma opcao:

if "%opcao%"=="1" (
    echo Encerrando o servidor Node.js...
    taskkill /IM node.exe /F
    echo Servidor encerrado.
    pause
    exit
)

goto menu
