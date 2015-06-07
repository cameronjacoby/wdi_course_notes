class Item < ActiveRecord::Base
  belongs_to :order
  validates_presence_of :name
  validates_presence_of :description
end