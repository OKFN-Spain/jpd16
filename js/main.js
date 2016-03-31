/*
* Leaflet map
*/
/*var map = L.map('map').setView([40.41644,-3.69359], 15);

// add a marker in the given location, attach some popup content to it and open the popup
// note that the street numbering is a bit odd: the actual entry is at the round part of the building (NE corner)
L.marker([40.41044, -3.69359]).addTo(map)
    .bindPopup('Medialab-Prado')
    .openPopup();

//	L.marker([40.42043,-3.70222]).addTo(map)
//	.bindPopup('Fundación Telefonica')
map.scrollWheelZoom.disable();

// add Google layer
var googleLayer = new L.Google('ROADMAP');
map.addLayer(googleLayer);*/

// balance text
$('.introHeadline').balanceText();

$(".lazy").unveil(200, function() {
  $(this).load(function() {
    this.style.opacity = 1;
  });
});
