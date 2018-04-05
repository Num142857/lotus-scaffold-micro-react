#!/usr/bin/env node

const program = require('commander');
const appInfo = require('../package.json')

program
  .version(appInfo.version, '-v, --version')
  .option('-i, --init', '初始化')


program
  .command('init')
  .description('初始化你的项目')
  .action(require('./init').init);


program.parse(process.argv);
