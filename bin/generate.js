
var Metalsmith = require('metalsmith');
var consolidate = require('consolidate')
var inquirer = require('inquirer')
var path = require('path')

var metalsmith;

module.exports = {
  component(src) {
    let templatePath = path.resolve(__dirname, '../.lotus/template/component');
    generate(templatePath,src)
  },
  page(src) {
    let templatePath = path.resolve(__dirname, '../.lotus/template/page');
    generate(templatePath,src)
  }
}

function generate(templatePath,src ){
  if (src) {
    //如果有路径,直接生成
    metalsmith = Metalsmith(__dirname)
      .source(templatePath)
      .destination(process.cwd() + "/" + src)
      .use(template)
      .build(function (err) {
        if (err) throw err;
      });
  } else {
    //没有路径的处理,命令行问完问题再生成
    metalsmith = Metalsmith(__dirname)
      .source(templatePath)
      .use(ask)
      .use(template)
      .build(function (err) {
        if (err) throw err;
      });
  }
}

//命令行问题
function ask(files, metalsmith, done) {
  inquirer
    .prompt([{
      type: 'input',
      name: 'componentName',
      message: '你的组件名称是?',
    }, {
        type: 'input',
        name: 'path',
        message: '路径',
      }]).then((answers)=>{
        var metadata = metalsmith.metadata();
        metadata['componentName'] = answers.componentName
        metalsmith.destination(process.cwd() + "/" + answers.path);
        done()
    })
}

//渲染
function template(files, metalsmith, done) {
  var keys = Object.keys(files);
  var metadata = metalsmith.metadata();
  keys.forEach((file)=>{
    var str = files[file].contents.toString();
    consolidate.handlebars.render(str, metadata, function (err, res) {
      if (err) return done(err);
      files[file].contents = new Buffer(res);
      done();
    });
  })
}