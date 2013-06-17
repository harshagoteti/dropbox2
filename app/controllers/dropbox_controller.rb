class DropboxController < ApplicationController
       def index
  render :action => "index" 
    end
def uploadFile
redirect :to =>"sign_in"
end
def edit
end
def new
end
end
