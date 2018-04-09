
var Metalsmith = require('metalsmith');
var consolidate = require('consolidate')
var path = require('path')

/**
 * Build.
 */

var metalsmith = Metalsmith(__dirname)
  .source(path.resolve(__dirname, '../.lotus/template'))
  .destination('./dsds/')
  .use(ask)
  .use(template)
  .build(function (err) {
    if (err) throw err;
  });

/**
 * Prompt plugin.
 *
 * @param {Object} files
 * @param {Metalsmith} metalsmith
 * @param {Function} done
 */

function ask(files, metalsmith, done) {
  var prompts = ['name', 'repository', 'description', 'license'];
  var metadata = metalsmith.metadata();
  metadata['ComponentName'] = 1234
  done()
}

/**
 * Template in place plugin.
 *
 * @param {Object} files
 * @param {Metalsmith} metalsmith
 * @param {Function} done
 */

function template(files, metalsmith, done) {
  var keys = Object.keys(files);
  var metadata = metalsmith.metadata();
  console.log(metadata)
  keys.forEach((file)=>{
    var str = files[file].contents.toString();
    console.log(str)
    consolidate.handlebars(str, metadata, function (err, res) {
      if (err) return done(err);
      files[file].contents = new Buffer(res);
      done();
    });
  })
}