#!/usr/bin/env bash
set -e

if [[ "$1" != "--local" && "$1" != "--remote" ]]; then
  SUBMODULES=()

  for DIR in packages/*/; do
    if [ -f "$DIR/package.json" ]; then
      SUBMODULES+=("${DIR%/}")
    fi
  done

  for SUB in "${SUBMODULES[@]}"; do
    echo "...::: Installing '$SUB' dependencies :::..."
    (cd "$SUB" && npm install)
    echo ""
  done
fi 

if [[ "$1" == "--local" ]]; then
  (cd packages/element && npm run build)

  mkdir -p packages/ui/node_modules/@htmlplus/element

  rm -rf packages/ui/node_modules/@htmlplus/element/dist

  cp -r packages/element/dist packages/ui/node_modules/@htmlplus/element

  (cd packages/ui && npm run build)

  mkdir -p packages/document/node_modules/@htmlplus/element

  rm -rf packages/document/node_modules/@htmlplus/element/dist

  cp -r packages/element/dist packages/document/node_modules/@htmlplus/element

  mkdir -p packages/document/node_modules/@htmlplus/ui

  rm -rf packages/document/node_modules/@htmlplus/ui/dist

  cp -r packages/ui/dist packages/document/node_modules/@htmlplus/ui
fi 

if [[ "$1" == "--remote" ]]; then
  (cd packages/ui && npm i)
  (cd packages/document && npm i)
fi 