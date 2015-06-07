class Product < ActiveRecord::Base
  has_many :sales
  has_many :customers, :through => :sales
end