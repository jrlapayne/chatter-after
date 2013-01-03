window.Chatter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(data) {
	this.messages = new Chatter.Collections.Messages(data.messages);
    new Chatter.Routers.Messages({
		messages: this.messages
	});
	Backbone.history.start();
  },

  test: function(message) {
	this.messages.trigger('test', message);
  }
};
