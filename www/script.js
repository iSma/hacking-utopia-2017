var baseUrl = "https://hack.lct.ee/";

// set up Leaflet (for <div id="map"></div>)
var mymap = L.map('mymap').setView([90.0, 0.0], 20);
var leafletOptions = {
  tms: true,        // tiled map service, required
  noWrap: true,
  attribution: '',
  minZoom: 14,
  maxZoom: 25
};

var floors = [{
  "building": {
    "id": 6
  },
  "floorPlans": [
    {
      "id": 10,
      "tileLayerUrl": "api/v1/floorPlans/10/tiles/{z}/{x}/{y}.png"
    }
  ],
  "geoJson": "{\"type\":\"Feature\",\"properties\":{\"rectangle\":true},\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[0.00004895031452178966,-0.000409707427014159],[0.00004895031452178966,-0.00005431473254907581],[0.0012197345495224,-0.00005431473254907581],[0.0012197345495224,-0.000409707427014159],[0.00004895031452178966,-0.000409707427014159]]]}}",
  "id": 3,
  "level": 7,
  "measurementAggregationLevel": "WORKPLACE",
  "name": "OG 7"
},
{
  "building": {
    "id": 6
  },
  "floorPlans": [
    {
      "id": 9,
      "tileLayerUrl": "api/v1/floorPlans/9/tiles/{z}/{x}/{y}.png"
    }
  ],
  "geoJson": "{\"type\":\"Feature\",\"properties\":{\"rectangle\":true},\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[0.00004895031452178966,-0.000409707427014159],[0.00004895031452178966,-0.00005431473254907581],[0.0012197345495224,-0.00005431473254907581],[0.0012197345495224,-0.000409707427014159],[0.00004895031452178966,-0.000409707427014159]]]}}",
  "id": 2,
  "level": 6,
  "measurementAggregationLevel": "WORKPLACE",
  "name": "OG 6"
},
{
  "building": {
    "id": 6
  },
  "floorPlans": [
    {
      "id": 8,
      "tileLayerUrl": "api/v1/floorPlans/8/tiles/{z}/{x}/{y}.png"
    }
  ],
  "geoJson": "{\"type\":\"Feature\",\"properties\":{\"rectangle\":true},\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[0.00004895031452178966,-0.000409707427014159],[0.00004895031452178966,-0.00005431473254907581],[0.0012197345495224,-0.00005431473254907581],[0.0012197345495224,-0.000409707427014159],[0.00004895031452178966,-0.000409707427014159]]]}}",
  "id": 9,
  "level": 5,
  "measurementAggregationLevel": "WORKPLACE",
  "name": "OG 5"
},
{
  "building": {
    "id": 6
  },
  "floorPlans": [
    {
      "id": 7,
      "tileLayerUrl": "api/v1/floorPlans/7/tiles/{z}/{x}/{y}.png"
    }
  ],
  "geoJson": "{\"type\":\"Feature\",\"properties\":{\"rectangle\":true},\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[0.00004895031452178966,-0.000409707427014159],[0.00004895031452178966,-0.00005431473254907581],[0.0012197345495224,-0.00005431473254907581],[0.0012197345495224,-0.000409707427014159],[0.00004895031452178966,-0.000409707427014159]]]}}",
  "id": 8,
  "level": 4,
  "measurementAggregationLevel": "WORKPLACE",
  "name": "OG 4"
},
{
  "building": {
    "id": 6
  },
  "floorPlans": [
    {
      "id": 6,
      "tileLayerUrl": "api/v1/floorPlans/6/tiles/{z}/{x}/{y}.png"
    }
  ],
  "geoJson": "{\"type\":\"Feature\",\"properties\":{\"rectangle\":true},\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[0.00004895031452178966,-0.000409707427014159],[0.00004895031452178966,-0.00005431473254907581],[0.0012197345495224,-0.00005431473254907581],[0.0012197345495224,-0.000409707427014159],[0.00004895031452178966,-0.000409707427014159]]]}}",
  "id": 7,
  "level": 3,
  "measurementAggregationLevel": "WORKPLACE",
  "name": "OG 3"
},
{
  "building": {
    "id": 6
  },
  "floorPlans": [
    {
      "id": 5,
      "tileLayerUrl": "api/v1/floorPlans/5/tiles/{z}/{x}/{y}.png"
    }
  ],
  "geoJson": "{\"type\":\"Feature\",\"properties\":{\"rectangle\":true},\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[0.00004895031452178966,-0.000409707427014159],[0.00004895031452178966,-0.00005431473254907581],[0.0012197345495224,-0.00005431473254907581],[0.0012197345495224,-0.000409707427014159],[0.00004895031452178966,-0.000409707427014159]]]}}",
  "id": 6,
  "level": 2,
  "measurementAggregationLevel": "WORKPLACE",
  "name": "OG 2"
},
{
  "building": {
    "id": 6
  },
  "floorPlans": [
    {
      "id": 4,
      "tileLayerUrl": "api/v1/floorPlans/4/tiles/{z}/{x}/{y}.png"
    }
  ],
  "geoJson": "{\"type\":\"Feature\",\"properties\":{\"rectangle\":true},\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[0.00004895031452178966,-0.000409707427014159],[0.00004895031452178966,-0.00005431473254907581],[0.0012197345495224,-0.00005431473254907581],[0.0012197345495224,-0.000409707427014159],[0.00004895031452178966,-0.000409707427014159]]]}}",
  "id": 5,
  "level": 1,
  "measurementAggregationLevel": "WORKPLACE",
  "name": "OG 1"
},
{
  "building": {
    "id": 6
  },
  "floorPlans": [
    {
      "id": 3,
      "tileLayerUrl": "api/v1/floorPlans/3/tiles/{z}/{x}/{y}.png"
    }
  ],
  "geoJson": "{\"type\":\"Feature\",\"properties\":{\"rectangle\":true},\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[0.000048279762268066406,-0.0004264712333530109],[0.000048279762268066406,-0.00007107853888792774],[0.0012190639972686765,-0.00007107853888792774],[0.0012190639972686765,-0.0004264712333530109],[0.000048279762268066406,-0.0004264712333530109]]]}}",
  "id": 4,
  "level": 0,
  "measurementAggregationLevel": "WORKPLACE",
  "name": "EG 0"
}]

var foo = document.getElementById("floors");
floors.forEach(function(floor) {
  var btn = document.createElement("BUTTON");
  var t = document.createTextNode(floor.name);
  btn.appendChild(t);
  btn.onclick = function() {
    L.tileLayer(baseUrl + floor.floorPlans[0].tileLayerUrl, leafletOptions).addTo(mymap);

    // zoom floor into view
    var geoJson = L.geoJSON(JSON.parse(floor.geoJson));
    mymap.fitBounds(geoJson.getBounds());
  };
  //Append the element in page (in span).
  foo.appendChild(btn);
});
