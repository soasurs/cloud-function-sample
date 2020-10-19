var AV = require('leancloud-storage');

AV.Cloud.define("hello_with_option_internal", {fetchUser: false, internal: true}, function(req) {
  return "Hello World"
})

AV.Cloud.define("hello_with_option_not_fetch_user", {fetchUser: false}, function(req) {
  return {
    "currentUser": req.currentUser
  }
})

AV.Cloud.define("hello_with_option_fetch_user", {fetchUser: true}, function(req) {
  return {
    "sessionToken": req.sessionToken
  }
})

