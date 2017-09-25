class Api::BaseController < ApplicationController
  protect_from_forgery with: :null_session
  respond_to :json, :html
end
