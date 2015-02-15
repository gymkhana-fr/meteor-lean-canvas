Package.describe({
  name: 'pntbr:lean-canvas',
  version: '0.0.1',
  summary: 'Lean canvas template',
  git: 'https://github.com/gymkhana-fr/meteor-lean-canvas',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use(['templating', 'handlebars', 'bootstrap'], 'client');
  api.addFiles([
    'lib/client/canvas.css',
    'lib/client/canvas.html',
    'lib/client/content.css',
    'lib/client/content.html',
    'lib/client/content.js',
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pntbr:lean-canvas', 'client');
  api.addFiles('pntbr:lean-canvas-tests.js');
});
