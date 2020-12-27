class PostsController < ApplicationController
  # デプロイテスト
  before_action :set_id, only: [:show, :edit, :update, :destroy]
  PER_PAGE = 10
  def index
    @q = Post.ransack(params[:q])
    @posts = @q.result.page(params[:page]).per(PER_PAGE).order(updated_at: :asc)
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to root_url
    else
      render :new
    end
  end
  
  def show
  end
  
  def edit
  end
  
  def update
    if @post.update(post_params)
      redirect_to root_url
    else
      render :edit
    end
  end
  
  def destroy
    @post.destroy
    redirect_to root_url
  end

  private
  def post_params
    params.require(:post).permit(:title, :content)
  end

  def set_id
    @post = Post.find_by(id: params[:id])
  end
end
