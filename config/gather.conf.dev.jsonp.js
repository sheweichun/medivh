const Base = require('./base');


module.exports = {
  packName: 'webpack',
  packScope: '@ali',
  packOption: ({context}) => {
    return {
      dll: false,
      modules: true,
      happypack: false,
      common: false,
      less: false,
      sass: false,
      config: {
        dest: Base.getDest(),
        library: Base.getLibrary(),
        externals: Base.getExternals(),
        libraryTarget: 'jsonp',
        env: Base.getEnv(),
        resolve: Base.getResolve(),
        entry: Base.getEntry(false, '.jsonp'),
        uglyOpt: Base.getUglyOpt()
      }
    }
;
  },
  plugins: []
};


