#!/bin/bash
set -e

cd /Users/arshadhossain/Projects/QuillBill

echo "==> Cleaning old vercel config..."
rm -rf .vercel dist/.vercel

echo "==> Building..."
npm run build

echo "==> Deploying to Vercel..."
npx vercel deploy --prod --yes ./dist

echo "==> Done!"
