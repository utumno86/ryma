class CreateGuests < ActiveRecord::Migration[5.1]
  def change
    create_table :guests do |t|
      t.string :first
      t.string :last
      t.string :email
      t.string :roomnumber
      t.string :reservation

      t.timestamps
    end
  end
end
