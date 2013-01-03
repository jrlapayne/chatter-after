class MessagesController < ApplicationController
  respond_to :json
  
  def main
  end
  
  def index
    @messages = Message.all
    respond_with @messages
  end

  def create
    @message = Message.create!(params[:message])
    PrivatePub.publish_to("/messages/new", message: @message)
    respond_with @message
  end
  
  def show
    respond_with Message.find(params[:id])
  end
  
  def update
    respond_with Message.update(params[:id], params[:message])
  end
  
  def destroy
    respond_with Message.destroy(params[:id])
  end
end
