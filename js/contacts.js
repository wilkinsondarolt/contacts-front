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

    function createCORSRequest(method, url) {
      var xhr = new XMLHttpRequest();
      if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
      } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
      } else {
        // CORS not supported.
        xhr = null;
      }
      return xhr;
    }

    var appurl = 'http://localhost:3000/pages.json';
    var request = createCORSRequest("POST", appurl);
    request.withCredentials = true;
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));
  }

  setTrackingInfo();
  addEvent(window, 'load', sendPageView);
}());
