  function toggleSidebar() {
    document.getElementById('sidebars').classList.toggle('show');
  }

  //Halaman admin
$(document).ready(function () {

  // load default page
  LoadPageAdmin('pages1');

  $('.menu-link-adm').click(function (e) {
    e.preventDefault();

    $('.menu-link-adm').removeClass('active');
    $(this).addClass('active');
    let pageAdm = $(this).data('page');
    LoadPageAdmin(pageAdm);
  });

  function LoadPageAdmin(pageAdm) {
    $('#contentAdmin').load('page/' + pageAdm + '.php');
  }

});
