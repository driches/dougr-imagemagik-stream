# dougr-imagemagik-stream
Meteor package that wraps the NPM module imagemagik-stream

https://www.npmjs.com/package/imagemagick-stream

Usage: 
```JavaScript
var resize = im().resize('200x200').quality(90);
readStream.pipe(resize).pipe(writeStream);
```
