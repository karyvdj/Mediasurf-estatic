function initMap() {
  var coordenadas = {lat: 19.408220, lng:  -99.172113};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: coordenadas
  });
  var marker = new google.maps.Marker({
    position: coordenadas,
    map: map
  });
}


$('.carousel').carousel({
  interval: 2000
  })
