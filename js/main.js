$( document ).ready(function() {
    // balance text
    $('.introHeadline').balanceText();

    // lazyload images
    $(".lazy").unveil(200, function() {
        $(this).load(function() {
            this.style.opacity = 1;
        });
    });

    // map!
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFydGluZ256IiwiYSI6ImNpbGd2cG5tMTAwNWV3OGx6MHg1MmltYnQifQ.A6Fvtb7Sk_okvco9kuDziA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v8',
        center: [-3.6935213386006467, 40.411403908491764],
        zoom: 14,
        interactive: false
    });

    // add medialab marker
    map.on('style.load', function () {
        map.addSource("markers", {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-3.693693, 40.410587]
                    },
                    "properties": {
                        "marker-symbol": "rocket"
                    }
                }]
            }
        });

        map.addLayer({
            "id": "markers",
            "type": "symbol",
            "source": "markers",
            "layout": {
                "icon-image": "{marker-symbol}-15"
            }
        });
    });
});
