JournalApp.Views.PostShow = Backbone.View.extend({
  events: {},

  render: function () {
    var view = this;
    // console.log(view.model);
    var renderedContent = view.template({
      post: view.model
    });

    view.$el.html(renderedContent);
    return view;
  },

  template: JST["posts/show"]
});

