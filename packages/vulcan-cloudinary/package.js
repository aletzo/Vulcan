Package.describe({
  name: 'vulcan:cloudinary',
  summary: 'Vulcan file upload package.',
  version: '1.16.2',
  git: 'https://github.com/VulcanJS/Vulcan.git',
});

Package.onUse(function(api) {
  api.use(['vulcan:core@=1.16.2']);

  api.mainModule('lib/client/main.js', 'client');
  api.mainModule('lib/server/main.js', 'server');
});
