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
	npm install || echo An error occured with the installer. please resolve what that could be and then come back later. && pause & exit
	ren "notinstalled" "installed"
	cls
	goto start
) else (
	goto start
)

:: Run npm start
:start
echo %NAME% is now starting...
echo Please go into https://localhost:8140 as chromium starts.
npm start
pause
