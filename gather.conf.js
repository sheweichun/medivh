const path = require('path');
const fs = require('fs');
const localIdentName = '[name][local]-[hash:base64:5]';
const content = fs.readFileSync(path.resolve(__dirname,'./.git/HEAD'),'utf-8');
const matchList = content.match(/daily\/(.*)/);
const branchName = matchList ? matchList[1] : '';
module.exports = {
  packName: 'customeservice-worker',
  // packName:'webpack',
  packScope: '@ali',
  packOption: ({context}) => {
    
    return {
    dll: false,
    modules: true,
    happypack: true,
    common:"vendor",
    less: true,
    sass: true,
    config: {
      pages:'examples',
      comment:'洛丹',
      templateHtml:{

      },
      dllVendor: 'vendor',
      publicPath:`//g-assets.daily.taobao.net/qn/qn-home/${branchName}`,
      localIdentName,
      externals:{
        "react": "React",
        "react-dom":"ReactDOM",
        "@alife/next":"Next"
      },
      resolve:{
        // "react":"worker-react",
        'worker-react-common':path.resolve(__dirname,'./packages/medivh-common/src/index.js'),
        'worker-react-runtime':path.resolve(__dirname,'./packages/medivh-runtime/src/index.js'),
        'worker-react':path.resolve(__dirname,'./packages/medivh/src/index.js'),
        'worker-react-render':path.resolve(__dirname,'./packages/medivh-render/src/index.js'),
        "worker-react-redux":path.resolve(__dirname,'./packages/medivh-redux/src/index.js'),
        "worker-react-router":path.resolve(__dirname,'./packages/medivh-router/src/index.js'),
        'medivh-common':path.resolve(__dirname,'./packages/medivh-common/src/index.js'),
        'medivh-runtime':path.resolve(__dirname,'./packages/medivh-runtime/src/index.js'),
        'medivh':path.resolve(__dirname,'./packages/medivh/src/index.js'),
        'medivh-render':path.resolve(__dirname,'./packages/medivh-render/src/index.js'),
        "medivh-redux":path.resolve(__dirname,'./packages/medivh-redux/src/index.js'),
        "medivh-router":path.resolve(__dirname,'./packages/medivh-router/src/index.js'),
      },
      uglyOpt: {
        beautify: false,
        comments: false,
        compress: {
          unused: true,
          dead_code: true,
          drop_console: true,
          warnings: false,
        },
        mangle: {
          except: ['$', 'exports', 'require'],
        },
        output: {
          ascii_only: true,
        },
      },
      babelDev: {
        presets: [],
      },
      babel: {
        babelrc: false,
        presets: ['react', 'env'],
        plugins: [
          'syntax-dynamic-import',
          'transform-decorators-legacy',
          'transform-es2015-modules-commonjs',
          'transform-object-rest-spread',
          'transform-class-properties',
          [
            "react-css-modules",
            {
              context,
              "generateScopedName": localIdentName,
              "filetypes": {
                ".scss": {
                  "syntax": "postcss-scss"
                },
                ".less": {
                  "syntax": "postcss-less"
                }
              },
              "webpackHotModuleReloading": true,
              "handleMissingStyleName": "warn"
            }
          ]
        ]
      },
      // babelDev:{},
      contentBase: [
        {
          name: '',
          path: path.resolve(__dirname, './examples/demo')
        }
      ]
    }
  }},
  plugins: []
};


