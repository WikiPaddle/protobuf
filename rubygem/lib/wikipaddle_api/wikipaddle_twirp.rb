# Code generated by protoc-gen-twirp_ruby 1.10.0, DO NOT EDIT.
require 'twirp'
require_relative 'wikipaddle_pb.rb'

module WikipaddleApi
  module V1
    class MobileService < ::Twirp::Service
      package 'wikipaddle_api.v1'
      service 'Mobile'
      rpc :GetUser, UserRequest, UserResponse, :ruby_method => :get_user
      rpc :GetGuide, GuideRequest, GuideResponse, :ruby_method => :get_guide
      rpc :GetGuidesCollection, GetGuidesCollectionRequest, GetGuidesCollectionResponse, :ruby_method => :get_guides_collection
      rpc :GetCurrentUser, GetCurrentUserRequest, UserResponse, :ruby_method => :get_current_user
      rpc :GetGuideCommentsCollection, GetGuideCommentsCollectionRequest, GetGuideCommentsCollectionResponse, :ruby_method => :get_guide_comments_collection
      rpc :CreateGuideComment, CreateGuideCommentRequest, GuideComment, :ruby_method => :create_guide_comment
    end

    class MobileClient < ::Twirp::Client
      client_for MobileService
    end
  end
end
