// Carte Gmap velo'v
function GMap() {

    this.insert = function () {
        var blocMap = document.createElement("div");
        blocMap.id = "blocMap";
        document.body.appendChild(blocMap);

        var map = document.createElement("div");
        map.id = "map";

        document.getElementById("blocMap").appendChild(map);
    };


}

function initMap() {
    var lyon = {
        lat: 45.750000,
        lng: 4.850000
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: lyon,
        zoom: 15
    });
    MarkerClusterer();
    

}
