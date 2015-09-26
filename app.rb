require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database , 'sqlite3:pizzashop.db'

class Product < ActiveRecord::Base

end

get '/' do
  @products = Product.all
	erb :index			
end

get '/about' do
	erb :about
end

post '/cart' do
  @items = params[:orders].delete!('product_').split(',')
  @items.map! do |item|
    item = item.split('=')
    [Product.find(item[0]).title,item[1]]
    end

  erb :cart
end