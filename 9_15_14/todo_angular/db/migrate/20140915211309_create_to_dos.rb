class CreateToDos < ActiveRecord::Migration
  def change
    create_table :to_dos do |t|
      t.string :task
      t.text :details
      t.boolean :done

      t.timestamps
    end
  end
end