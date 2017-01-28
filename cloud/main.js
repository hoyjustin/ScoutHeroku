// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("getplaces", function(request, response) {
  var query = new Parse.Query("Business");
  query.find({
    success: function(results) {
      response.success(results);
    },
    error: function() {
      response.error("Business lookup failed");
    }
  });
});

Parse.Cloud.define("getCustomer", function(request, response) {
  var userObject = request.object.get("Customer");
  var query = new Parse.Query("Customer");

  console.log(userObject);

  query.equalTo("user", userObject);
  query.find({
    success: function(results) {
      response.success(results);
    },
    error: function(error) {
      response.error(error);
    }
  })
});