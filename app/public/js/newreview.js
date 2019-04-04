$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });

  $(".report-submit").click(function (event) {
    event.preventDefault();

    var name = $("#author");
    var make = $("#make");
    var model = $("#model");
    var color = $("#color");
    var license_plate = $("#plate");
    var rating = $("#rating");
    var comment = $("#report-box");
    var date_time = $("#date");
    var location = $("#location");

    var newReview = {
      name: name.val().trim(),
      make: make.val().trim(),
      model: model.val().trim(),
      color: color.val().trim(),
      license_plate: license_plate.val().trim(),
      rating: rating.val().trim(),
      comment: comment.val().trim(),
      date_time: date_time.val().trim(),
      location: location.val().trim()
    };

    console.log(newReview);

    $.post("/api/newreviews", newReview, function () {
      return;
    });
  });

  $('#myModal').on('shown.bs.modal', function () {
    $('#report-submit').trigger('focus')
  })

});
