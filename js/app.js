require.config({
  baseUrl: "/js/",
  paths: {
    jquery: 'components/jquery/index',
    underscore: 'components/underscore/index',
    backbone: 'components/backbone/index',
    'backbone.localStorage': 'components/backbone.localStorage/index'
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

require(
  [
    'jquery',
    'backbone',
    'models/Todo',
    'views/MasterView'
  ], 
  function($, Backbone, Todo, MasterView) {
 
  var Router = Backbone.Router.extend({
    routes: {
      "": "main"
    },
    main: function(){
      var tasks = new Todo.Collection();
      var view = new MasterView({collection: tasks});
      tasks.fetch({
        success: function(tasks){
          $("#container").html(view.render().el).show();
        }
      });
    }
  })
});