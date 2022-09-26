:: Important stuff
@echo off && cls
if not exist "installed" (if not exist "notinstalled" (echo Anistick Configuration File >> notinstalled))
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
TASKKILL /IM node.exe /F 2>nul
cls

:::::::::::::::::::::::::::::::
::      Start Anistick	     ::
:::::::::::::::::::::::::::::::

:: Check for installation
if exist notinstalled (
	echo %NAME% is not installed! Installing...
	npm install || echo An error occured with the installer. Please try to resolve the error and come back later. && pause & exit
	ren "notinstalled" "installed"
	cls
	goto start
) else (
	goto start
)

:: Run npm start
:start
echo %NAME% is now starting...
echo Please navigate to https://localhost:8140 as Chromium starts.
npm start
pause
