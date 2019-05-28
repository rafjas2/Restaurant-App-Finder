$(function() {
  /*======================= Toggle for Nav bar ====================*/
  $(".nav-link").click(function() {
    $("#navbarNav").hide();
  });

  $(".navbar-toggler").click(function() {
    $("#navbarNav").toggle();
  });

  /*=== Alert function for google play and apply stor button ===*/

  $(".googlePlay").click(function() {
    swal({
      title: "Oops!",
      text:
        "The website is for studying project. We are so sorry!!! Thank  You for using our website.",
      icon: "warning"
    });
  });

  $(".appStore").click(function() {
    swal({
      title: "Oops!",
      text:
        "The website is for studying project. We are so sorry!!! Thank  You for using our website.",
      icon: "warning"
    });
  });
});
