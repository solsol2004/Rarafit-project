var HOME_PATH = window.HOME_PATH || ".";

var rarafit = new naver.maps.LatLng(37.587282, 127.0766696),
  map = new naver.maps.Map("pt-map", {
    center: rarafit.destinationPoint(0, 500),
    zoom: 15,
  }),
  marker = new naver.maps.Marker({
    map: map,
    position: rarafit,
  });

var contentString = [
  '<div class="iw_inner">',
  "   <span>라라핏 필라테스</span>",
  '       <img src="assets/img/logo-vertical.png" width="23" height="23" class="thumb" /><br />',
  "   <p>서울 중랑구 동일로 678-1 / 2층<br /><br />",
  "       010-6460-3363<br />",
  "   </p>",
  "</div>",
].join("");

var infowindow = new naver.maps.InfoWindow({
  content: contentString,
});

naver.maps.Event.addListener(marker, "click", function (e) {
  if (infowindow.getMap()) {
    infowindow.close();
  } else {
    infowindow.open(map, marker);
  }
});

infowindow.open(map, marker);
