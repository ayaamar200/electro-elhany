#!/bin/bash

echo "🚀 Building Angular app..."
npm run build

echo "🧹 Removing old build files..."
ssh root@147.79.118.47 "rm -rf /var/www/html/angular/*"

echo "📦 Uploading new build..."
scp -r dist/electro-elhany/* root@147.79.118.47:/var/www/html/angular/

echo "✅ Deployment complete!"
