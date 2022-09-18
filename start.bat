:: Important stuff
@echo off && cls
if not exist "installed" (if not exist "notinstalled" (echo Anistick Configuration File >> notinstalled))
set VER=2.2
set BVER=1
set NAME=Anistick
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
	call npm install
	ren "notinstalled" "installed"
	cls
	goto start
) else (
	goto start
)

:: Run npm start
:start
echo %NAME% is now starting...
echo Please navigate to http://localhost on your browser.
npm start
