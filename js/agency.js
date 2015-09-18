var overlay;

function initialize() {
    var myLatLng = new google.maps.LatLng(62.323907, -150.109291);
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
        div.innerHTML = '<img src="http://nhduong29.github.io/nhduongProject1/img/WhereTo-Logo-small.png" alt="Mountain View" style="width:30px;height:22px">'+21;
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
    var htmlMarker = new HTMLMarker(62.323907, -150.109291);
    htmlMarker.setMap(gmap);
}