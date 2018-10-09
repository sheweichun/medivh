#!/bin/sh


lerna run build

rm -rf build
pkgs='medivh medivh-render medivh-runtime medivh-redux medivh-router'
for i in $pkgs
    do
        rm -rf packages/$i/dist
        export TO_BUILD_PACKAGE_NAME=$i
        wgather build -e src -c config/gather.conf.dev.js,config/gather.conf.prod.js -d
        cp -r build/$i packages/$i/dist
done