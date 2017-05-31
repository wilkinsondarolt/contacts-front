(function() {
  'use strict';

  function setTrackingInfo(){
    if (!localStorage.getItem('trackid')){
      localStorage.setItem('trackid',  getHashCode());
    }
  }

  function sendPageView() {
    var dataAtual = new Date();
    var data = {
      "visitedurl": window.location.href,
      "trackid": localStorage.getItem('trackid'),
      "accessdate": dataAtual.toISOString()
    }

    var appurl = "localhost:3000/pages.json";
    new Request(appurl + '?'+ JSON.stringify(data), {
            method:'post',
            contentType:"application/json",
            postBody:'key=' + value});
    var request = new XMLHttpRequest();
    request.open("POST", appurl, true);
    request.setRequestHeader('Cache-Control', 'no-cache');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));
  }

  setTrackingInfo();
  addEvent(window, 'load', sendPageView);
}());
