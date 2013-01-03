Chatter.Routers.Messages = Backbone.Router.extend({
	
	routes: {
		'' : 'test'
	},
	
	initialize: function(options) {
		this.messages = options.messages;
	},
	
	test: function() {
		var view = new Chatter.Views.MessagesIndex({
			messages: this.messages
		});
		$('#big_page').html(view.render().el);
	}
});
