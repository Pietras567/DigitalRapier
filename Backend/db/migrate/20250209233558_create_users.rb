class CreateUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :users do |t|
      t.bigint :id
      t.string :firstName
      t.string :lastName
      t.timestamp :lastActivity

      t.timestamps
    end
  end
end
