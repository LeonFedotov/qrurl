(function() {
  var qr = 'http://chart.apis.google.com/chart?cht=qr&chs=177x177&chl=';
  chrome.tabs.getSelected(null, function(tab){
    console.log(tab);
    var img = document.createElement('img');
    img.src = qr+tab.url;
    document.body.appendChild(img);
  });
}());