/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1555318098920_9750';

  // add your middleware config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'postgres',
    database: 'cxl-Love-cj',
    host: 'localhost',
    port: '5432',
    username: 'cxl-Love-cj',
    password: 'cxl-Love-cj'
  };

  config.security = {
    // 暂时关闭 csrf 检测
    csrf: {
      enable: false
    }
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
