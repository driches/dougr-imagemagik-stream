# dougr-imagemagik-stream
Meteor package that wraps the NPM module imagemagik-stream

https://www.npmjs.com/package/imagemagick-stream

Usage: 
    var resize = im().resize('200').quality(90);
    readStream.pipe(resize).pipe(writeStream);
