#!/usr/bin/env sh
# 發生錯誤時執行終止指令
set -e
# 打包編譯
npm run build
# 移動到打包資料夾下，若有調整，打包後的資料夾請務必調整
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/Emily-Ouyang/Connect-3C.git master:gh-pages
cd -