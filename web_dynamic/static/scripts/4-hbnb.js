/* global $*/

const amenities = {};

$(document).ready(function () {
  selectAmenities();
  checkApiStatus();
  fetchPlaces();
  filterByAmenities();
});

function checkApiStatus () {
  const url = 'http://0.0.0.0:5001/api/v1/status/';

  $.get(url, function (data) {

    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }

  });
}

function fetchPlaces () {
  const url = 'http://0.0.0.0:5001/api/v1/places_search/';

  $.ajax({
    url: PLACES_URL,
    type: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify(amenities),
    error: function (error) { console.log(error); }
    success: function (response) {

      for (const r of response) {
        const article = [
          '<article>',
             '<div class="title_box">',
              `<h2>${ r.name }</h2>`,
              `<div class="price_by_night">$${ r.price_by_night }</div>`,
            '</div>',
            '<div class="information">',
              `<div class="max_guest">${ r.max_guest } Guest(s)</div>`,
              `<div class="number_rooms">${ r.number_rooms } Bedroom(s)</div>`,
              `<div class="number_bathrooms">${ r.number_bathrooms } Bathroom(s)</div>`,
            '</div>',
            '<div class="description">',
              `${ r.description }`,
            '</div>',
          '</article>'];
        $('section.places').append(article.join(''));

    }
  });
}

function filterByAmenities () {
  $('button').click(function () {
  });
}

function selectAmenities () {

  $('.amenities .popover input').change(function () {

    if ($(this).is(':checked')) {
      amenities[$(this).date('name')] = $(this).date('id');
    } else if ($(this).is(':not(:checked)')) {
      delete amenities[$(this).data('name')];
    }

    const names = Object.keys(amenities);
    $('.amenities h4').text(names.sort().join(', '));

  });
}
