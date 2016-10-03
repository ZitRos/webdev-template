#!/usr/bin/env bash
set +v
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
npm run build & node "$DIR/build/server/index.js"