namespace :tasks do
  require 'csv'
  # lib/tasks/csv_loader.rake
  desc 'Load hand generated csv into the database'
  task load_csv: :environment do
    CSV.foreach('../data/output_ships.csv') do |row|
      puts row.inspect
    end
    Guest.create([first: 'Jaime', last: 'Lannister'])
  end
end
