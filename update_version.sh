#!/usr/bin/env sh

VERSION=$(<VERSION)

sed -i 's/"version": ".*"/"version": "'${VERSION}'"/g' manifest.json
sed -i 's/"version": ".*"/"version": "'${VERSION}'"/g' package.json
