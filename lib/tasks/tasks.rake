namespace :tasks do
  require 'csv'
  # lib/tasks/csv_loader.rake
  desc 'Load hand generated csv into the database'
  task load_csv: :environment do
    CSV.foreach('SampleGuests.csv', headers: true) do |row|
      Guest.create(
        reservation: row[0],
        first: row[1],
        last: row[2],
        roomnumber: row[3],
        email: row[4]
      )
    end
  end
end
