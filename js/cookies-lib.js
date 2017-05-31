(function() {

    'use strict';

    window.setCookie = function(cname, cvalue, cexDays) {
        var d = new Date();
        d.setTime(d.getTime() + (cexDays*24*60*60*1000));
        document.cookie = cname + '=' + cvalue + '; expires=' + d.toUTCString();
    }

    window.getCookie = function getCookie(cname) {
        var name = cname + '=';
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }
        return '';
    };

    window.deleteCookie = function(cname) {
        window.setCookie(cname, '', -1);
    }

})();
