class GuestController < Api:BaseController
  def update
    @guest = Guest.find_by reservation: params[:reservation]
    @guest.baggages.create(guest_id: @guest.id, qrcode: @guest.reservation, delivered: false)
  end
end
