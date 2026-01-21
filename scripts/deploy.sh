#!/bin/bash

APP_DIR=$1
cd $APP_DIR || exit
git pull origin main
npm install --production
pm2 restart app || pm2 start index.js --name app
pm2 save