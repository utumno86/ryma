class CreateBaggages < ActiveRecord::Migration[5.1]
  def change
    create_table :baggages do |t|
      t.integer :count
      t.string :qrcode
      t.boolean :delivered
      t.references :guest, foreign_key: true

      t.timestamps
    end
  end
end
