JournalApp.Routers.Router = Backbone.Router.extend({
  routes: {
   "":"postsIndex",
   "posts/:id":"postShow",
   "posts/:id/edit":"postEdit"
  },

  initialize: function (options) {
    this.rootEl = options.rootEl;
  },

  postsIndex: function () {
    var router = this;
    console.log(router.rootEl);

    JournalApp.coll.fetch({
      success: function (posts) {
        var view = new JournalApp.Views.PostsIndex({
          el: router.rootEl,
          collection: posts
        });
        view.render();
      }
    });
  },

  postShow: function (postId) {
    var router = this;

    var post = JournalApp.coll.get(postId);
    var view = new JournalApp.Views.PostShow({
      el: router.rootEl,
      model: post
    });
    view.render();
  },

  postEdit: function (postId) {
    var router = this;

    var post = JournalApp.coll.get(postId);
    var view = new JournalApp.Views.PostForm({
      el: router.rootEl,
      model: post
    });
    view.render();
  }
});