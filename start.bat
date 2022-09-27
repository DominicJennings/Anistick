:: Important stuff
@echo off && cls
if not exist "ins" (if not exist "notins" (echo Anistick Configuration File >> notins))
set VER=2.3
set BVER=1
set NAME=Anistick
set ENV=dev
if %ENV%==dev ( git pull || git stash && git pull ) else ( git stash && git pull )
title %NAME% v%VER% Build %BVER%

::::::::::::::::::::
:: Initialization ::
::::::::::::::::::::

:: Terminate existing node.js apps
taskkill /f /im node.exe
cls

:::::::::::::::::::::::::::::::
::      Start Anistick	     ::
:::::::::::::::::::::::::::::::

:: Check for installation
if not exist node_modules ( npm install && goto start ) else ( goto start )

:: Run npm start
:start
echo %NAME% is now starting...
echo Please navigate to https://localhost on Chromium.
npm start
pause
