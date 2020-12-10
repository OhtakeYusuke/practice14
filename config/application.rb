require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module Practice14
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0
    config.i18n.default_locale = :ja
    config.time_zone = "Asia/Tokyo"
  end
end
