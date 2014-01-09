window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // use this semi-global variable JournalApp.coll?

    // setting collection before setting up router makes requests to
    // individual show views fail
    JournalApp.coll = new JournalApp.Collections.Posts();
    JournalApp.coll.fetch({
      success: function () {
        console.log("fetched!");
      }
    });

    new JournalApp.Routers.Router({ rootEl: $('#content') });
    Backbone.history.start();

  }
};

$(document).ready(function(){
  JournalApp.initialize();
});


