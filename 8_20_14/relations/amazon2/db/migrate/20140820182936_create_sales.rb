class CreateSales < ActiveRecord::Migration
  def change
    create_table :sales do |t|
      t.date :sale_date
      t.references :product
      t.references :customer
      t.timestamps
    end
  end
end
