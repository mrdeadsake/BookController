require "digest"

module ApplicationHelper

  def product_name
    "BookControl"
  end

  def product_root_url
    "/"
  end

  def webpack_asset_path(asset_name)
    asset_file = ::Rails.application.config.assets.webpack["assetsByChunkName"][asset_name]
    asset_file = asset_file.first if asset_file.is_a?(Array)
    "#{webpack_public_path}#{asset_file}"
  end

  def webpack_public_path
    @webpack_public_path ||= ::Rails.application.config.assets.webpack["publicPath"]
  end

  def javascript_env_script_tag
    nuvify_javascript_env_script_tag(javascript_envs)
  end

  def javascript_envs
    {
        :appURL => root_url,
    }
  end

  def default_javascript_rails_env
    {
        PRODUCT_NAME: ENV["PRODUCT_NAME"],
        RAILS_ENV: Rails.env.to_s,
    }
  end

  def default_javascript_env(additional_env_variables = {})
    javascript_envs
        .merge(default_javascript_rails_env)
        .merge(default_javascript_ui_env)
        .merge(additional_env_variables)
  end

  def default_javascript_ui_env
    {
        csrfToken: form_authenticity_token,
        preferredTheme: "graphite",
    }
  end

  def nuvify_javascript_env_script_tag(env_variables = {})
    javascript_tag do
      "window.env = #{default_javascript_env(env_variables).to_json};".html_safe
    end
  end


  def webpack_asset_config
    asset_config = {}
    webpack_config = JSON.parse(File.read("config/webpack.json"))
    public_path = webpack_config["publicPath"]
    webpack_builds = webpack_config["assetsByChunkName"]
    webpack_builds.each do |asset_name, asset_files|
      asset_files = asset_files.reject { |p| p =~ /.*\.map$/ }
      asset_config[asset_name] = asset_files.map { |p| "#{public_path}#{p}" }
    end
    asset_config.with_indifferent_access
  end



end
