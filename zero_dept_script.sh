#!/bin/bash

# zero_dept_script.sh - Smooth setup for Promptweaver's Grimoire (WSL-friendly)
# Usage: Run this once after cloning

set -e

# ----------------------------------
# 1. Check for Volta (Node manager)
# ----------------------------------
echo -e "\n🧙 Checking for Volta..."
if ! command -v volta &> /dev/null; then
  echo "Volta not found. Installing..."
  curl https://get.volta.sh | bash
  export PATH="$HOME/.volta/bin:$PATH"
else
  echo "✅ Volta is already installed."
fi

# ----------------------------------
# 2. Set correct Node and npm versions
# ----------------------------------
echo -e "\n🔧 Installing correct Node version..."
volta install node@18
volta install npm@10.2.0

# ----------------------------------
# 3. Fix permission issues (esp. in WSL)
# ----------------------------------
echo -e "\n🧹 Resetting dist folder (if needed)..."
if [ -d dist ]; then
  sudo rm -rf dist
fi
mkdir -p dist

# ----------------------------------
# 4. Install dependencies
# ----------------------------------
echo -e "\n📦 Installing dependencies (with legacy peer deps)..."
npm install --legacy-peer-deps

# ----------------------------------
# 5. Build the project
# ----------------------------------
echo -e "\n⚙️ Building project..."
npm run build

# ----------------------------------
# 6. Done!
# ----------------------------------
echo -e "\n✅ Setup complete!"
echo "You can now run: \033[1;35mnpm run dev\033[0m to start the magic ✨"
