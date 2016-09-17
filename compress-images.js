const imagemin = require('imagemin');
// const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
 
imagemin(['./src/images/icons/*.{jpg,png}', './src/images/thumbnails/*.{jpg,png}'], './public/images', {
    use: [imageminJpegtran()],
    plugins: [
        // imageminMozjpeg({targa: true}),
        imageminPngquant({quality: '65-80'})
    ]
}).then(files => {
    console.log(files);
});