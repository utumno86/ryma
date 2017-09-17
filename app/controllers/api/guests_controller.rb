class Api::GuestsController < Api::BaseController
  def index
  end
  def show
    puts params
    @guest = Guest.find_by reservation: params[:id]
    respond_with :api, json: @guest
  end
end
