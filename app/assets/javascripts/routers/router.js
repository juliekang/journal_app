JournalApp.Routers.Router = Backbone.Router.extend({
  routes: {
   "":"postsIndex",
   "posts/:id":"postShow"
  },

  postsIndex: function () {
    JournalApp.coll.fetch({
      success: function (posts) {
        var view = new JournalApp.Views.PostsIndex({
          el: $('#content'),
          collection: posts
        });
        view.render();
      }
    });
  },

  postShow: function (postId) {
    var post = JournalApp.coll.get(postId);
    var view = new JournalApp.Views.PostShow({
      el: $("#content"),
      model: post
    });
    view.render();
  }
});