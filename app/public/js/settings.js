$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });

  /* $(".delete-button").click(function () {

    var email = $("#email").val();

    console.log(email);

    $.ajax({
      method: "DELETE",
      url: "/api/users/" + email
    })
      .then(function () {
        return;
      });
  })
}); */
