class Api::GuestsController < Api::BaseController
  def index
  end
  def show
    @guest = Guest.find_by reservation: params[:id]
    respond_with :api, json: @guest
  end
  def update
    @guest = Guest.find_by reservation: params[:id]
    @guest.bagstatus = true
    @guest.save
    respond_with :api, json: @guest
  end
end
