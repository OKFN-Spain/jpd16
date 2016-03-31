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
        center: [-3.6934784232611264, 40.41297234503051],
        zoom: 14,
        maxBounds: [
            [-3.727627,40.397941], // Southwest coordinates
            [-3.660078,40.428329]  // Northeast coordinates
        ]
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

    // disable annoying scroll interaction
    map.scrollZoom.disable();
});
