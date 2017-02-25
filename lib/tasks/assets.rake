::Rake::Task["assets:precompile"]
    .clear
    .enhance(["assets:webpack"])

namespace :assets do
  desc "Compile assets with webpack"
  task :webpack do
    exec "npm run build"
  end
end