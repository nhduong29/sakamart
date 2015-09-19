var overlay;

function initialize() {
    var myLatLng = new google.maps.LatLng(10.79684,106.64267);
    var mapOptions = {
        zoom: 11,
        center: myLatLng
    };

    var gmap = new google.maps.Map(document.getElementById('map-saka'), mapOptions);

    function HTMLMarker(lat,lng){
        this.lat = lat;
        this.lng = lng;
        this.pos = new google.maps.LatLng(lat,lng);
    }

    HTMLMarker.prototype = new google.maps.OverlayView();
    HTMLMarker.prototype.onRemove= function(){}

    //init your html element here
    HTMLMarker.prototype.onAdd= function(){
        div = document.createElement('DIV');
        div.className = "htmlMarker";
        div.innerHTML = '<img src="http://nhduong29.github.io/nhduongProject1/img/gmap_marker.png" alt="Mountain View" style="width:39px;height:62px">'+'Saky Mart';
        var panes = this.getPanes();
        panes.overlayImage.appendChild(div);
    }

    HTMLMarker.prototype.draw = function(){
        var overlayProjection = this.getProjection();
        var position = overlayProjection.fromLatLngToDivPixel(this.pos);
        var panes = this.getPanes();
        panes.overlayImage.style.left = position.x + 'px';
        panes.overlayImage.style.top = position.y - 30 + 'px';
    }

    //to use it
    var htmlMarker = new HTMLMarker(10.79684,106.64267);
    htmlMarker.setMap(gmap);
}
