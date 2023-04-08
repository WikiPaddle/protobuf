# frozen_string_literal: true

require "rack"

require_relative "wikipaddle_api/version"
require_relative "../rpc/wikipaddle_twirp"

module WikipaddleApi
  class Error < StandardError; end
  # Your code goes here...
end
