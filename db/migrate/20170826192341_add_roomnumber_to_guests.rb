class AddRoomnumberToGuests < ActiveRecord::Migration[5.1]
  def change
    add_index :guests, :roomnumber, unique: true
  end
end
