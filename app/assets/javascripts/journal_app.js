window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    JournalApp.coll = new JournalApp.Collections.Posts();
    JournalApp.coll.fetch({
      success: function () {
        console.log("fetched!");
      }
    });

    new JournalApp.Routers.Router();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});


