class Account < ApplicationRecord
  belongs_to :User

  has_secure_password
end
