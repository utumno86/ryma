# database table for setting up sets of baggage
class Baggage < ApplicationRecord
  belongs_to :guest
end
