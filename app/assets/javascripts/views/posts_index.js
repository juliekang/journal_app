JournalApp.Views.PostsIndex = Backbone.View.extend({

  events: {
    "click .delete" : "delete",
  },

  delete: function (event) {
    event.preventDefault();
    var postId = parseInt($(event.currentTarget).parent().attr("data-id"));
    var post = this.collection.get(postId);

    post.destroy({
      success: function (post, response) {
        console.log("You destroyed " + post.get('title') + "!");
      }
    })
  },

  render: function () {
    var view = this;
    var renderedContent = view.template({ posts: this.collection });
    this.$el.html(renderedContent);
    return view;
  },

  template: JST["posts/index"],

  initialize: function () {
    this.listenTo(this.collection, "add change:title reset remove", this.render);
  }
});

