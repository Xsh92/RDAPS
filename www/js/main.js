function openBrowser() {
    var ref = window.open('http://www.google.com', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
    ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
    ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
    ref.addEventListener('exit', function(event) { alert(event.type); });
}

function remoteSite() {
    intel.xdk.device.showRemoteSiteExt("http://moodle.curtin.edu.my/login/index.php");
}

function openE() {
    var eref = window.open('http://www.yahoo.com', '_system', 'location=yes');
    eref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
    eref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
    eref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
    eref.addEventListener('exit', function(event) { alert(event.type); });
}