#!/bin/bash

# Script to prepare Next.js standalone build for deployment

echo "Preparing Next.js standalone build for deployment..."

# Create necessary directories in standalone
mkdir -p .next/standalone/.next
mkdir -p .next/standalone/public

# Copy static folder
echo "Copying .next/static to standalone..."
cp -r .next/static .next/standalone/.next/static

# Copy public folder
echo "Copying public folder to standalone..."
cp -r public .next/standalone/public

echo "✅ Deployment package ready!"
echo ""
echo "📦 Upload these to your server:"
echo "   - .next/standalone/ (entire folder)"
echo ""
echo "📝 On your server, run:"
echo "   cd standalone"
echo "   npm install --production"
echo "   node server.js"
echo ""
echo "⚠️  Don't forget to:"
echo "   - Set RESEND_API_KEY environment variable"
echo "   - Configure your server to run on port 3000 (or set PORT env var)"
