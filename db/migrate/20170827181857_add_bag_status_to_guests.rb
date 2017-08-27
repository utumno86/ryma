class AddBagStatusToGuests < ActiveRecord::Migration[5.1]
  def change
    add_column :guests, :bagstatus, :boolean
  end
end
