//CONFIGURAZIONE DOT
var dotnAdAsyncParamsAd = {
  tagPfx: "lan_lan_all_all",
  funGen: "lanotizia",
  responsiveSizes: {"720":"x"},
  dnt: 0,
  cpb: 0,
  keywords: ""
};

function dotnAdShowAdAsync(sizepos) {
  try { dotnAd.showAdAsync(sizepos);} catch(e) {
    setTimeout(function () { dotnAdShowAdAsync(sizepos); }, 200);
  }
}
(function(d) {
  var g = d.createElement("script");
  var s = d.getElementsByTagName("script")[0];
  g.id = "DnABase"
  g.src = "https://cdn64.dotandads.com/api99.js";
  s.parentNode.insertBefore(g, s);
}) (document);
