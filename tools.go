//go:build tools
// +build tools

package tools

import (
	_ "github.com/github/twirp-ruby/protoc-gen-twirp_ruby"
	_ "github.com/twitchtv/twirp/protoc-gen-twirp"
	_ "google.golang.org/protobuf/cmd/protoc-gen-go"
)
