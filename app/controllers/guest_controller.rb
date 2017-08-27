class GuestController < ApplicationController
  def create
    # Create the guest from params
    @guest = Guest.new(params[:guest])
    if @guest.save
      # Deliver the signup email
      GuestNotifier.send_signup_email(@guest).deliver
      redirect_to(@guest, :notice => 'Guest created')
    else
      render :action => 'new'
    end
  end
end
