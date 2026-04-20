@echo off
echo Initializing Git repository and pushing to GitHub...
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/srisaimanikantha/VoxMatrix-Political-Intelligence-Platform.git
git push -u origin main
echo.
echo Push complete!
pause
