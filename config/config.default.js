/* eslint valid-jsdoc: "off" */
const { mysql_default } = require("./config_mysql");

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    jwt: {
      secret: 'ruyi',
      sign: {
        expiresIn: '999h'
      }
    },
    //关闭csrf
    security: {
      csrf: {
        enable: false
      },
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1707378112358_700';

  // add your middleware config here
  config.middleware = ['responseHandler'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  //mysql config
  config.mysql = mysql_default

  return {
    ...config,
    ...userConfig,
  };
};

// 测个提交