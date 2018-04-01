#!/usr/bin/env node
var inquirer = require('inquirer')
const util = require('lotusjs-util')
const fse = require('fs-extra');
const path = require('path');
const shell = require("shelljs");
const child_process = require('child_process')
const lotusConfig = require('../.lotus/')
const log = util.log
inquirer
  .prompt([{
    type: 'input',
    name: 'name',
    message: '给你的项目取个名字吧',
  }, ])
  .then( async function(answers) {

      for (let index = 0; index < lotusConfig.files.length; index++) {
          const filePath = lotusConfig.files[index];
          let basePath = path.resolve(__dirname, '../' + filePath)
          let targetPath = process.cwd() + '/' + filePath
          try {
            await fse.copy(basePath, targetPath);
            log.info("success:", filePath)
          } catch (error) {
            shell.exit(1);
            log.warn(error)
          }
      }

    let packageConfig
    try {
        packageConfig = await fse.readJson(`${process.cwd()}/package.json`)
        packageConfig.name = answers.name
        packageConfig.registerConfig.name = answers.name
        packageConfig.registerConfig.prefix = `/${answers.name}/`
        packageConfig.registerConfig.main = `/${answers.name}/main.js`
        packageConfig.registerConfig.store = `/${answers.name}/store.js`
    } catch (error) {
        shell.exit(1);
        log.warn('package读取失败',error)
    }

    try {
      await fse.writeJson(`${process.cwd()}/package.json`, packageConfig ,{spaces:2})
      log.info("脚手架生成完毕")
      process.exit();
      shell.exit(0);
    } catch (error) {
      shell.exit(1);
      log.warn('脚手架生成失败',error)
    }


    // log.info(answers,lotusConfig)
  });
