$(document).ready(function() {
  $("#sidebarCollapse").on("click", function() {
    $("#sidebar").toggleClass("active");
  });

  $("#create-user").click(function(event) {
    event.preventDefault();

    var email = $("#email1").val();
    var password = $("#password1").val();

    var newUser = {
      email: email,
      password: password,
      userAccess: "user"
    };

    console.log(newUser);

    $.post("/api/users", newUser, function() {
      window.location.href="/dashboard";
    });
  })
});
