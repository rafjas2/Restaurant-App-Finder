$(function() {
  $(".nav-link").click(function() {
    $("#navbarNav").hide();
  });

  $(".navbar-toggler").click(function() {
    $("#navbarNav").toggle();
  });

  $(".googlePlay").click(function() {
    swal({
      title: "Oops!",
      text: "The website is for studying project. We are so sorry!!!",
      icon: "warning"
    });
  });

  $(".appStore").click(function() {
    swal({
      title: "Oops!",
      text: "The website is for studying project. We are so sorry!!!",
      icon: "warning"
    });
  });
});
