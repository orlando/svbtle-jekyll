require 'date'
namespace :posts do
  task :create do
    params = ARGV.clone
    params.shift

    # this prevents rake from failing trying to run parameters as tasks
    params.each {|arg| task arg.to_sym do ; end}

    if params.length < 2
      message = "Usage\n  rake posts:create post_name category\n\nOptional params\n  date: defaults to today date (iso format)\n\nExample\n  rake posts:create example_post_name category_name date\n  rake posts:create 'first post' code 2013-07-11"
      puts message
    else
      # we asume variables came in correct order
      post_name = params[0]
      category_name = params[1]
      date = params[2] || Date.today.strftime("%F")
      customid = rand(8 ** 36).to_s(36)
      pretty_date = Date.strptime(date).strftime("%B %d, %Y")

      # here we write the new post file
      filename = "#{date}-#{post_name.downcase.gsub(/[^0-9A-z.\-]/, '-')}.markdown"
      file_header = "---\nlayout: post\ntitle: #{post_name}\ndate: #{pretty_date}\ncategory: #{category_name}\ncustomid: #{customid}\n---\n\nwrite content here"

      File.open("_posts/#{filename}", "w+") do |file|
        file.write(file_header)
      end
      puts "post created"
    end
  end
end
