class YoutubesController < ApplicationController
  def index
    @youtubes = Youtube.all
  end

  def new
    @youtube = Youtube.new()
  end
  
  def create
    @youtube = Youtube.new(youtube_params)
    @youtube.url_id = @youtube.url.last(11)
    @youtube.save
    redirect_to youtubes_url
  end

  def show
    @youtube = Youtube.find_by(id: params[:id])
  end

  def edit

  end

  def update
    
  end

  def destroy

  end
  private
  def youtube_params
    params.require(:youtube).permit(:body, :url)
  end
end
