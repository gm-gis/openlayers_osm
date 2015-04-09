// API key for http://openlayers.org. Please get your own at
// http://bingmapsportal.com/ and use that instead.
var apiKey = "AqTGBsziZHIJYYxgivLBf0hVdrAk9mWO5cQcb8Yux8sW5M8c8opEC2lZqKR1ZZXf";

//var hybrid = new OpenLayers.Layer.Bing({
//    key: apiKey,
//    type: "AerialWithLabels",
//    name: "Bing Aerial With Labels"
//});
var wms = new OpenLayers.Layer.WMS( "OpenLayers WMS",
            "http://vmap0.tiles.osgeo.org/wms/vmap0", {layers: 'basic'} );
var vector = new OpenLayers.Layer.Vector("GeoJSON", {
    projection: "EPSG:4326",
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "tresArroyosPoints.json",
        format: new OpenLayers.Format.GeoJSON()
    })
});

var center = new OpenLayers.LonLat(-38.407374530274, -60.519242686196);

var map = new OpenLayers.Map({
    div: "map",
    layers: [wms, vector],
    center: center,
    zoom: 8
});
