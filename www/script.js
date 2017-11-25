var occupancy
fetch("occupancy.json")
  .then(response => response.json())
  .then(json => {occupancy = json});

const baseUrl = "https://hack.lct.ee/";

// set up Leaflet (for <div id="map"></div>)
const map = L.map('mymap').setView([0, 0], 20);
const group = new L.FeatureGroup().addTo(map);

const options = {
  tms: true,        // tiled map service, required
  noWrap: true,
  attribution: '',
  minZoom: 14,
  maxZoom: 25
};

const floors = [{
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

floors.forEach((floor) => {
  var sel = document.getElementById("floorSel");
  var option = document.createElement("option");
  option.value = floor.id
  option.text = floor.name;
  sel.add(option);
})

var polygons = {
  1: L.polygon([
    [-0.0002255528307, 0.0000617957182],
    [-0.0002255528307, 0.0002191884127],
    [-0.00006877488613, 0.0002191884127],
    [-0.00006877488613, 0.0000617957182],
  ]).bindPopup("I am 100."),
  2: L.polygon([
    [-0.0002255528307, 0.0002617957182],
    [-0.0002255528307, 0.0005191884127],
    [-0.00006877488613, 0.0005191884127],
    [-0.00006877488613, 0.0002617957182],
  ]).bindPopup("I am 200."),
  3: L.polygon([
    [-0.0002255528307, 0.0005617957182],
    [-0.0002255528307, 0.0008191884127],
    [-0.00006877488613, 0.0008191884127],
    [-0.00006877488613, 0.0005617957182],
  ]).bindPopup("I am 300."),
  4: L.polygon([
    [-0.0002255528307, 0.0008617957182],
    [-0.0002255528307, 0.001219188413],
    [-0.00006877488613, 0.001219188413],
    [-0.00006877488613, 0.0008617957182],
  ]).bindPopup("I am 400."),
  8: L.polygon([
    [-0.0004105528307, 0.0000617957182],
    [-0.0004105528307, 0.0004191884127],
    [-0.0002287748861, 0.0004191884127],
    [-0.0002287748861, 0.0000617957182],
  ]).bindPopup("I am 800."),
  7: L.polygon([
    [-0.0004105528307, 0.0004617957182],
    [-0.0004105528307, 0.0006991884127],
    [-0.0002287748861, 0.0006991884127],
    [-0.0002287748861, 0.0004617957182],
  ]).bindPopup("I am 700."),
  6: L.polygon([
    [-0.0004105528307, 0.0007617957182],
    [-0.0004105528307, 0.0009991884127],
    [-0.0002287748861, 0.0009991884127],
    [-0.0002287748861, 0.0007617957182],
  ]).bindPopup("I am 600."),
  5: L.polygon([
    [-0.0004105528307, 0.001061795718],
    [-0.0004105528307, 0.001199188413],
    [-0.0002287748861, 0.001199188413],
    [-0.0002287748861, 0.001061795718],
  ]).bindPopup("I am 500.")
}

function myFunction() {
    var floorId = document.getElementById("floorSel").value;
    let floor = floors.filter(floor => floor.id == floorId)[0];
    group.clearLayers();
    const tile = L.tileLayer(baseUrl + floor.floorPlans[0].tileLayerUrl, options);
    group.addLayer(tile);

    let geoJson = JSON.parse(floor.geoJson);

    geoJson = L.geoJSON(geoJson, {
      style: {
        "color": "#ff7800",
        "weight": 5,
        "opacity": 0.65
      }
    });

    Object.keys(polygons).forEach((key) => {
      group.addLayer(polygons[key]);
    })

    map.fitBounds(geoJson.getBounds());
}

function onColor() {
  var floorId = document.getElementById("floorSel").value;
  let floor = floors.filter(floor => floor.id == floorId)[0];

  let color;
  let timestamp = Object.keys(occupancy)[0];
  console.log(occupancy[timestamp][floorId]);
  locations = occupancy[timestamp][floorId];
  Object.keys(locations).forEach(key => {
    let value = locations[key]
    if (value < 0.25) color = 'green';
    else if (value >= 0.25 && value < 0.5) color = 'yellow';
    else if (value >= 0.5 && value < 0.75) color = 'orange';
    else color = 'red';
    polygons[key].setStyle({color: color})
    polygons[key].bindPopup("exp. occupancy: "+Math.round(value*100)+"%")
  });
}

function updateTime(){
  label = document.getElementById("hourLabel");
  date = document.getElementById("dateInput").value;
  time = document.getElementById("timeInput").value;
  if(time < 10){
      time = "0" + time;
  }
  datetime = date + "T" + time + ":00:00";
  d = new Date(datetime)
  unixTime = d.getTime()/1000;

  label.innerHTML = time + ":00";
  return unixTime;
}

function updateTimeStamp(){
  alert(updateTime());
}
