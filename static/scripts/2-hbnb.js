/* global $*/

$(document).ready(function () {
  const url = 'http://0.0.0.0:5001/api/v1/status/';
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

  $.get(url, function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });

});
