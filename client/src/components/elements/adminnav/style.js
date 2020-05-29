import $ from 'jquery';

function handleSidebarActiveClass() {
    // if we open in tablet devices
    //sidebar will have active class
    if ($(window).width() >= 768) {
      $("#sidebar").addClass("active");
    } else {
      $("#sidebar").removeClass("active");
    }
  }
  handleSidebarActiveClass();
  // resize eventlistener
  $(window).resize(() => {
    handleSidebarActiveClass();
  });
  $(document).ready(function () {
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
    });
  });