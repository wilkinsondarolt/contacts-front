(function() {
  'use strict';

  function setTrackingInfo(){
    if (!localStorage.getItem('trackid')){
      localStorage.setItem('trackid',  getHashCode());
    }
  }

  function loadFormEvent() {
    var formulario = document.getElementById('contact');

    function createNewContact(evento) {
      var e = evento || window.event;
      e.preventDefault();

      var appurl = 'https://contact-track.herokuapp.com/contacts.json';
      var dataAtual = new Date();
      var data = {
        "trackid": localStorage.getItem('trackid'),
        "name": document.getElementById('nome').value,
        "email": document.getElementById('email').value,
      }
      var request = new XMLHttpRequest();
      request.open('POST', appurl);
      request.withCredentials = true;
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(data));
      alert('Seu contato foi cadastrado com sucesso.');
      location.reload();
    }
    addEvent(formulario, 'submit', createNewContact);
  }

  function sendPageView() {
    var appurl = 'https://contact-track.herokuapp.com/pages.json';
    var dataAtual = new Date();
    var data = {
      "visitedurl": window.location.href,
      "trackid": localStorage.getItem('trackid'),
      "accessdate": dataAtual.toISOString()
    }

    var request = new XMLHttpRequest();
    request.open('POST', appurl);
    request.withCredentials = true;
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));
  }
  setTrackingInfo();
  addEvent(window, 'load', sendPageView);
  addEvent(window, 'load', loadFormEvent);
}());
