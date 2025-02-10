class CreateAccounts < ActiveRecord::Migration[8.0]
  def change
    create_table :accounts do |t|
      t.bigint :id
      t.string :login
      t.string :password
      t.belongs_to :User, null: false, foreign_key: true

      t.timestamps
    end
  end
end
