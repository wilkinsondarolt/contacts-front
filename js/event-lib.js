(function() {

    'use strict';

    if(document.addEventListener) {
        window.addEvent = function(elem, type, fn) {
            elem.addEventListener(type, fn, false);
        }
        window.removeEvent = function(elem, type, fn) {
            elem.removeEventListener(type, fn, false);
        }
    }else if(document.attachEvent) {
        window.addEvent = function(elem, type, fn) {
            elem.attachEvent('on' + type, fn);
        }
        window.removeEvent = function(elem, type, fn) {
            elem.detachEvent('on' + type, fn);
        }
    } else{
        window.addEvent = function(elem, type, fn) {
            elem['on' + type] = fn;
        }
        window.removeEvent = function(elem, type, fn) {
            elem['on' + type] = null;
            fn();
        }
        
    }

})();