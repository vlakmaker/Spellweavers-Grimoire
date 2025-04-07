#!/bin/sh

echo "🔍 [1] Working directory:"
pwd
echo "-------------------------"

echo "📁 [2] Listing app files (top-level):"
ls -l /app
echo "-------------------------"

echo "📄 [3] Showing SpellEditorPage.tsx:"
cat /app/src/pages/SpellEditorPage.tsx | head -n 30
echo "-------------------------"

echo "🔧 [4] Running npm run build to ensure fresh build..."
npm run build
BUILD_STATUS=$?

if [ $BUILD_STATUS -ne 0 ]; then
  echo "❌ Build failed!"
  exit 1
else
  echo "✅ Build succeeded!"
fi
echo "-------------------------"

echo "📡 [5] Checking if dev server is running on port 5173..."
lsof -i :5173 || echo "⚠️ Dev server not running"
echo "-------------------------"

echo "🧪 [6] Run dev server manually (for test only)"
echo "You can also do: npm run dev"
