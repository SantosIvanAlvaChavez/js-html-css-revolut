$(document).ready(function() {

  // Refs
  var dropLink = $('.parent > a');
  var dropMenu = $('.parent > .menu');

  // Show/hide menu
  dropLink.click(function() {

    var actualMenu = $(this).next('.menu');

    dropMenu.not(actualMenu).hide();

    actualMenu.toggle();

  });

});
