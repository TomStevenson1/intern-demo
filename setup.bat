@echo off
REM Setup script for Philips DevOps Internship Portfolio (Windows)

echo 🚀 Setting up Philips DevOps Internship Portfolio...

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    echo Visit: https://nodejs.org/
    pause
    exit /b 1
)

REM Check Node.js version
for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo ✅ Node.js version: %NODE_VERSION%

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

REM Install additional Tailwind CSS plugins  
echo 🎨 Installing Tailwind CSS and plugins...
call npm install -D tailwindcss-animate

echo.
echo ✅ Setup complete!
echo.
echo 📋 Next steps:
echo   1. npm start          - Start development server
echo   2. npm run build      - Build for production  
echo   3. npm test           - Run tests
echo.
echo 🌐 The app will be available at http://localhost:3000
echo.
echo 💡 Tips:
echo   - Update intern information in src/components/sections/About.tsx
echo   - Replace placeholder Miro board URLs in src/components/sections/CICDSection.tsx
echo   - Customize timeline dates in src/components/sections/Timeline.tsx
echo   - Add GitHub/LinkedIn links in src/components/sections/Contact.tsx

pause
