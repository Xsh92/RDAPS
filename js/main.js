document.addEventListener("deviceready", onDeviceReady, false);

document.addEventListener("touchstart", function() {}, false);

function onDeviceReady() {
    var app;
    navigator.splashscreen.hide();
    app = new Application();
    app.run();
}

function Application() {}

Application.prototype = {
    run: function() {
        var that = this,
            openLocal = document.getElementById("openLocal");
            openExternalInAppBrowser = document.getElementById("openExternalInAppBrowser");
            openExternalInSystemBrowser = document.getElementById("OpenExternalInSystemBrowser");
        
        openLocal.addEventListener("click", that.openLocal);
        openExternalInAppBrowser.addEventListener("click", that.openExternalInAppBrowser);
        openExternalInSystemBrowser.addEventListener("click", that.openExternalInSystemBrowser);
    },
    
    openLocal: function() {
        window.open("img/ice.png", "_blank");
    },
    
    openExternalInAppBrowser: function() {
        window.open("http//icenium.com", "_blank");
    },
    
    openExternalInSystemBrowser: function() {
        window.open("http://wiki.apache.org/cordova/InAppBrowser", "_system");
    }
}