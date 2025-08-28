#!/usr/bin/env bash
set -e

# Collect all submodules that have package.json
SUBMODULES=()
for DIR in packages/*/; do
  if [ -f "$DIR/package.json" ]; then
    SUBMODULES+=("${DIR%/}")
  fi
done

# Install dependencies for all submodules
for SUB in "${SUBMODULES[@]}"; do
  echo "...::: Installing '$SUB' dependencies :::..."
  (cd "$SUB" && npm install)
  echo ""
done

# Check if first argument is --local
if [[ "$1" == "--local" ]]; then
  echo "...::: Linking local packages :::..."

  cd packages/element
  npm link
  cd ../..

  cd packages/ui
  npm link @htmlplus/element
  cd ../..

  cd packages/ui
  npm link
  cd ../..

  cd packages/document
  npm link @htmlplus/ui
  cd ../..

  PEER_DEPS=$(node -p "Object.keys(require('./packages/ui/package.json').peerDependencies || {}).join(' ')")
  if [ -n "$PEER_DEPS" ]; then
    cd packages/document
    npm install $PEER_DEPS --no-save --install-strategy=linked
    cd ../..
  fi
fi