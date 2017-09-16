var fs = require('fs');

// var fileName = require('./portfolio.js');

var fileName = eval(fs.readFileSync('./portfolio.js')+'');

// var stream = fs.createWriteStream(fileName);

function buildHtml(req) {
  var header = '';
  var body = '';
  // console.log(fileName);

  // concatenate header string
  // concatenate body string

  return '<!DOCTYPE html>' + '<html><header>' + header + '</header><body>' + body + '</body></html>';
}

stream.once('open', function(fd) {
  var html = buildHtml();

  stream.end(html);
});
