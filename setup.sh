#!/bin/bash
# Setup script for Philips DevOps Internship Portfolio

echo "🚀 Setting up Philips DevOps Internship Portfolio..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v)
echo "✅ Node.js version: $NODE_VERSION"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Install additional Tailwind CSS plugins
echo "🎨 Installing Tailwind CSS and plugins..."
npm install -D tailwindcss-animate

# Build Tailwind CSS
echo "🔧 Building Tailwind CSS..."
npx tailwindcss build src/index.css -o src/output.css

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "  1. npm start          - Start development server"
echo "  2. npm run build      - Build for production"
echo "  3. npm test           - Run tests"
echo ""
echo "🌐 The app will be available at http://localhost:3000"
echo ""
echo "💡 Tips:"
echo "  - Update intern information in src/components/sections/About.tsx"
echo "  - Replace placeholder Miro board URLs in src/components/sections/CICDSection.tsx"
echo "  - Customize timeline dates in src/components/sections/Timeline.tsx"
echo "  - Add GitHub/LinkedIn links in src/components/sections/Contact.tsx"
