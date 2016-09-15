var fs = require('fs');
var sass = require('node-sass');
const output = './public/styles.css';

sass.render({
  file: './src/sass/main.scss',
  includePaths: ['./node_modules'],
  outFile: output,
  outputStyle: 'compressed'
}, function(error, result) {
  if(!error){
    // No errors during the compilation, write this result on the disk
    fs.writeFile(output, result.css, function(err){
      if(!err){
        console.log("Compiled Sass to " + output)
      }
    });
  } else {
    console.log(error);
  }
});