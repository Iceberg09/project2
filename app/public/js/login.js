$(document).ready(function() {
  $("#sidebarCollapse").on("click", function() {
    $("#sidebar").toggleClass("active");
  });

  $("#login-submit").click(function(event) {
    event.preventDefault();

    var email = $("#email1");
    var password = $("#password1");

    $.get("/api/users/" + email + "/" + password, function(data) {
     console.log(data);
    });
  });
});
