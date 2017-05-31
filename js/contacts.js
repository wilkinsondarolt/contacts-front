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


    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://contact-track.herokuapp.com/pages.json", true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(data));
  }

  setTrackingInfo();
  window.onload = sendPageView;
}());
