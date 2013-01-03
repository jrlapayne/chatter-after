Chatter.Views.MessagesIndex = Backbone.View.extend({

  template: JST['messages/index'],
	
	events: {
		'submit #message' : 'saveMessage'
	},
	
	initialize: function(options) {
		this.messages = options.messages;
		this.messages.on('test', this.test, this);
	},
	
	render: function() {
		var self = this;
		$(this.el).html(this.template());
		setTimeout(function() {
			self.messages.each(function(message) {
				self.appendMessage(message.get('content'));
			});
		}, 0);
		return this;
	},
	
	appendMessage: function(message) {
		$('#chat').append(JST['messages/show']({message: message}));
	},
	
	saveMessage: function(event) {
		event.preventDefault();
		this.messages.create({
			content: $('#content').val()
		});
	},
	
	test: function(message) {
		this.appendMessage(message);
	},
});
