# table for keeping track of individual guests and their roomnumbers
class Guest < ApplicationRecord
  has_many :baggages
end
