class MessagesController < ApplicationController
  PER_PAGE = 10
  def show
    @messages = Message.all.page(params[:page]).per(PER_PAGE).order(updated_at: :desc)
  end
end
