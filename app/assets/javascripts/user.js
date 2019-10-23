$(function() {
  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    console.log(input);

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
　 　.done(function(users) {
      $("#user-search-result").empty();
      if (products.length !== 0) {
        users.forEach(function(user){
          appendName(user);
        });
    });
  });