@echo off
npm run build & node "%~dp0/build/server/index.js"