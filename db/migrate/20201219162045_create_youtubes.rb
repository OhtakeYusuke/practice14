class CreateYoutubes < ActiveRecord::Migration[6.0]
  def change
    create_table :youtubes do |t|
      t.text :body
      t.string :url
      t.string :url_id

      t.timestamps
    end
  end
end
