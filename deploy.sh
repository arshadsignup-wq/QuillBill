#!/bin/bash
set -e

# NOTE: production normally deploys automatically from pushes to `main` via the
# Vercel GitHub integration. This script is only for a manual out-of-band deploy.
#
# It uploads ./dist as the deployment root, so vercel.json must be copied in
# alongside it — otherwise cleanUrls, the /view + /edit rewrites and the 404
# handling are silently dropped and every clean URL breaks.

cd /Users/arshadhossain/Projects/QuillBill

echo "==> Building (includes prerender + sitemap)..."
npm run build

echo "==> Copying vercel.json into dist..."
cp vercel.json dist/vercel.json

echo "==> Deploying to Vercel..."
npx vercel deploy --prod --yes ./dist

echo "==> Done!"
