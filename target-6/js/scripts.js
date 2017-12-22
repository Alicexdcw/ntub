(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.10";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

var w = 350;
var _w = $(window).width();
$(function() {
  if (_w <= 768) {
    var ifrs = document.getElementsByTagName("iframe");
    for (var i = 0; i < ifrs.length; i++) {
      var ifr = ifrs[i];
      var a = ifr.src;
      if (a.indexOf("https://www.facebook.com/") == -1) continue;
      var b = a.indexOf("&width=");
      var c = a.substring(0, b + 7);
      var d = c + w;
      ifr.src = d;
      ifr.width = w;
    }
  }
});
