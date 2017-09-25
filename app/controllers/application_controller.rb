require "application_responder"

class ApplicationController < ActionController::Base
  self.responder = ApplicationResponder
  respond_to :html

  protect_from_forgery with: :null_session
  before_action :authenticate_user!, :except => [:index, :guest, :api]
end
