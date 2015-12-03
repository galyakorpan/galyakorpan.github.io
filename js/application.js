$(function() {
  $('.nav li').on('click', function() {
    $(this).parent().find('li.active').removeClass('active');
    $(this).addClass('active');
  });

  $('.carousel').carousel({
    interval: 144000
  }, 'pause');

  $('.body div').hide();
  var li = $('.navbar .nav.navbar-nav li');

  $("#tablesorter").tablesorter();

  var options = {
    valueNames: [ 'name', 'price' ]
  };

  var userList = new List('price-list', options);
});
