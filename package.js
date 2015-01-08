Npm.depends({
  'imagemagick-stream': "1.1.0"
});

Package.describe({
  name: 'dougr:imagemagik-stream',
  summary: 'adding stream support for imagemagik',
  version: '1.0.1',
  git: 'https://github.com/driches/dougr-imagemagik-stream'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.export('im'); //export our exposed NPM functionality
  api.addFiles(['dougr:imagemagik-stream.js'],'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('dougr:imagemagik-stream');
  api.addFiles('dougr:imagemagik-stream-tests.js');
});
