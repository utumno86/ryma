class Api::GuestsController < Api::BaseController
  def index
    @guest = Guest.find_by reservation: params[:reservation]
    @guest.baggages.create(guest_id: @guest.id, qrcode: @guest.reservation, delivered: false)
    respond_with :api, json: @guest
  end
end
