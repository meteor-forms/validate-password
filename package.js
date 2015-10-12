Package.describe({
  name: 'forms:validate-password',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Validate Password Fields in Meteor Forms',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/meteor-forms/validate-password',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use([
    'skinnygeek1010:validate-form@1.0.0',
    'underscore'
  ]);
  api.export('ValidateForm', 'client');
  api.addFiles('validate-password.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('forms:validate-password');
  api.addFiles('validate-password-tests.js');
});
