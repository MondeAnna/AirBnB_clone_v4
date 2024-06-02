/* global $*/

$(document).ready(function () {
  const amenities = {};

  $('.amenities .popover input').change(function () {

    if ($(this).is(':checked')) {
      amenities[$(this).date('name')] = $(this).date('id');
    } else if ($(this).is(':not(:checked)')) {
      delete amenities[$(this).data('name')];
    }

    const names = Object.keys(amenities);
    $('.amenities h4').text(names.sort().join(', '));

  });

});
