require.config({
  baseUrl: "/js/",
  paths: {
    jquery: 'lib/jquery-1.8.0',
    underscore: 'lib/underscore-1.3.3',
    backbone: 'lib/backbone-0.9.2',
    'backbone.localStorage': 'lib/backbone.localStorage'
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'backbone.localStorage': {
      deps: ['backbone'],
      exports: 'Backbone'
    }
  }
});
