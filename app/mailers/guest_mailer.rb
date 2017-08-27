# class GuestMailer < ApplicationMailer
#   include SendGrid
#   sendgrid_category :use_subject_lines
#   sendgrid_enable   :ganalytics, :opentrack
#
#   def welcome_message(guest)
#     email_body = ""
#     mail :to => guest.email, :subject => "Welcome #{guest.first} #{guest.last} :-)"
#   end
#
#
# end
