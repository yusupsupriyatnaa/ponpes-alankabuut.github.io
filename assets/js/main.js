$(document).ready(function () {

  // load default page
  loadPage('page1');

  $('.menu-link').click(function (e) {
    e.preventDefault();

    $('.menu-link').removeClass('active');
    $(this).addClass('active');

    let page = $(this).data('page');
    loadPage(page);
  });

  function loadPage(page) {
    $('#header').load('assets/header.php');
    $('#content').load('app/' + page + '.php');
    $('#footer').load('assets/footer.php');
  }

    $(document).ajaxStart(function () {
    $('#page-loader').fadeIn(500);
    });

    $(document).ajaxStop(function () {
  $('#page-loader').fadeOut(500);
});

});

// back to top
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

//modal
document.addEventListener("DOMContentLoaded", function () {
  var modal = new bootstrap.Modal(document.getElementById('autoModal'));
  modal.show();
});


