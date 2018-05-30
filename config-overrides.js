const rewireTypescript = require('react-app-rewire-typescript');
const rewireLess = require('react-app-rewire-less');
const path = require("path");
const _require = require('react-app-rewired'),
  injectBabelPlugin = _require.injectBabelPlugin;

module.exports = function override(config, env) {
  config.resolve.modules.push(path.resolve(__dirname, './src'));
  config = rewireTypescript(config, env);
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      "@font-size-base": "14px",
    }
  })(config, env);
  return config;
}