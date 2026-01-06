document.addEventListener('DOMContentLoaded', function () {
  /*======================= Toggle for Nav bar ====================*/
  var navLinks = document.querySelectorAll(".nav-link");
  var navbarNav = document.querySelector("#navbarNav");
  var navbarToggler = document.querySelector(".navbar-toggler");

  // Toggle menu when hamburger is clicked
  if (navbarToggler) {
    navbarToggler.addEventListener("click", function () {
      navbarNav.classList.toggle("show");
    });
  }

  // Close menu when a link is clicked
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navbarNav.classList.remove("show");
    });
  });

  /*=== Alert function for google play and app store button ===*/

  function createModal(title, text) {
    // Check if modal already exists
    var existingModal = document.querySelector("#custom-modal-overlay");
    if (existingModal) {
      existingModal.remove();
    }

    var modalHtml =
      '<div id="custom-modal-overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;z-index:9999;">' +
      '<div style="background:white;padding:30px;border-radius:10px;text-align:center;width:90%;max-width:400px;font-family:sans-serif;box-shadow: 0 4px 6px rgba(0,0,0,0.1);">' +
      '<h2 style="margin-top:0;color:#333;">' + title + '</h2>' +
      '<div style="margin:20px 0;font-size:16px;color:#666;">' + text + '</div>' +
      '<button id="custom-modal-close" style="padding:10px 25px;background:#058383;color:white;border:none;border-radius:5px;cursor:pointer;font-size:16px;">OK</button>' +
      '</div>' +
      '</div>';

    var div = document.createElement('div');
    div.innerHTML = modalHtml;
    document.body.appendChild(div.firstChild);

    // Close logic
    document.querySelector("#custom-modal-close").addEventListener("click", function () {
      document.querySelector("#custom-modal-overlay").remove();
    });

    // Close on click outside
    document.querySelector("#custom-modal-overlay").addEventListener("click", function (e) {
      if (e.target.id === "custom-modal-overlay") {
        this.remove();
      }
    });
  }

  var btns = document.querySelectorAll(".googlePlay, .appStore");
  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      createModal(
        "Oops!",
        "The website is for studying project. We are so sorry!!! Thank You for using our website."
      );
    });
  });
});
