# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!
ActionMailer::Base.smtp_settings = {
    :port =>           '587',
    :address =>        'smtp.sendgrid.net',
    :user_name =>      ENV['SENDGRID_USERNAME'],
    :password =>       ENV['SENDGRID_PASSWORD'],
    :domain =>         'ryma.herokuapp.com',
    :authentication => :plain,
    :enable_starttls_auto => true
}
