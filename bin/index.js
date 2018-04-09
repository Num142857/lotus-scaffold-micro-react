#!/usr/bin/env node

const program = require('commander');
const appInfo = require('../package.json')
var generate = require('./generate')
program
    .version(appInfo.version, '-v, --version')
    .option('-i, --init', '初始化')
    .option('-g, --generate', '模板生成')


program
    .command('init')
    .description('初始化你的项目')
    .action(require('./init').init);

program
    .command('generate')
    .option('-g, --generate', 'Remove recursively')
    .description('模板生成')
    .arguments('<type> [src]')  //[]:可选  <>:必选
    .action(function (type, src) {
        switch (type) {
            case 'page':
                console.log('开始生成页面')
                break;

            case 'component':
                console.log('开始生成页面')
                generate.component(src)
                break;

            default:
                console.log('参数错误,或者不支持该类型')
                break;
        }
        console.log(type, src)
    });


program.parse(process.argv);

// todo:
// lotus generate page src/modles/my-new-page: 新建页面
// lotus generate component my-new-component: 新建组件

// lotus generate 命令与其它的子命令一样，也有快捷键，具体如下：
// lotus g p src/modles/my-new-page: 新建页面
// lotus g c my-new-component: 新建组件

