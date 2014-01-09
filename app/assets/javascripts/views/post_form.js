JournalApp.Views.PostForm = Backbone.View.extend({

  events: {

  },

  render: function () {
    var view = this;
    var renderedContent = view.template({
      post: view.model
    });

    view.$el.html(renderedContent);
    return view;
  },

  template: JST["posts/form"]
});