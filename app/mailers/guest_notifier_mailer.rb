class GuestNotifierMailer < ApplicationMailer::Base
  default :from => 'any_from_address@example.com'

  # send a signup email to the user, pass in the user object that   contains the user's email address
  def send_guest_notification(guest)
    @guest = guest
    mail( :to => @guest.email,
    :subject => 'Your bag has arrived' )
  end
end
