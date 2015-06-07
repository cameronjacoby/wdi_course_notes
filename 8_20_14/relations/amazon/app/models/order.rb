class Order < ActiveRecord::Base
  has_many :items
  validates_presence_of :name
  validates_presence_of :description
end