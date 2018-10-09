const fs = require('fs');
const path = require('path');

const pkgName = process.env.TO_BUILD_PACKAGE_NAME;
const pkgDir = path.resolve(__dirname, `../packages/${pkgName}`);

let external = {};
const configDir = path.resolve(pkgDir, './config');
const externalPath = path.resolve(configDir, './external.js');
if (fs.existsSync(externalPath)) {
  external = require(externalPath);
}


function fixName(name) {
  if (name == null) throw new Error('name 不能为空');
  const nameArr = name.split('-');
  return nameArr.map((item) => {
    return item.substring(0, 1).toUpperCase() + item.substring(1);
  }).join('');
}

module.exports = {
  getDest() {
    return `build/${pkgName}`;
  },
  getEntry(flag, prefix = '') {
    const suffix = prefix + (flag ? '.min' : '');
    return {
      [`${pkgName}${suffix}`]: path.resolve(__dirname, `../packages/${pkgName}/src/index.js`),
    };
  },
  getExternals() {
    return external;
  },
  getResolve() {
    return {
      'worker-react-common': path.resolve(__dirname, '../packages/medivh-common/src/index.js'),
      'medivh-common': path.resolve(__dirname, '../packages/medivh-common/src/index.js'),
    };
  },
  getEnv(flag) {
    return {
      'process.env': {
        NODE_ENV: JSON.stringify(flag ? 'production' : 'development'),
      },
    };
  },
  getLibraryTarget() {
    return 'umd';
  },
  getLibrary() {
    return fixName(pkgName);
  },
  getUglyOpt(flag) {
    if (flag) {
      return {
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
      };
    }
    return false;
  }
};