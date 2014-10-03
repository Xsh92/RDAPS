function openBrowser() {
    var ref = window.open('http://www.curtin.edu.my', '_blank');
    ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
    ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
    ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
    ref.addEventListener('exit', function(event) { alert(event.type); });
}

function openExtBrowser() {
    var ref1 = window.open('http://moodle.curtin.edu.my', '_system');
    ref1.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
    ref1.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
    ref1.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
    ref1.addEventListener('exit', function(event) { alert(event.type); });
}