class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string  :title
      t.text    :description
      t.decimal :size
      t.decimal :price
      t.boolean :is_spicy
      t.boolean :is_vegan
      t.boolean :is_best_offer
      t.string  :path_to_image

      t.timestamps
    end
  end
end
