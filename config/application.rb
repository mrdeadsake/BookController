require File.expand_path("../boot", __FILE__)
require 'csv'
require 'rails/all'

Bundler.require(*Rails.groups)

module BookControl
  class Application < Rails::Application
    config.assets.enabled = false
    GC::Profiler.enable
    # Do not swallow errors in after_commit/after_rollback callbacks.
    config.active_record.raise_in_transactional_callbacks = true
    config.autoload_paths << Rails.root.join("lib")
  end
end

