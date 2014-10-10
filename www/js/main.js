function openMoodle() {
    var ref = window.open('http://moodle.curtin.edu.my/login/index.php', '_system', 'location=no');
    ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
    ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
    ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
    ref.addEventListener('exit', function(event) { alert(event.type); });
}

function openBB() {
    var ref2 = window.open('https://lms.curtin.edu.au/webapps/portal/frameset.jsp', '_system', 'location=yes');
    ref2.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
    ref2.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
    ref2.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
    ref2.addEventListener('exit', function(event) { alert(event.type); });
}

function openOasis() {
    var ref3 = window.open('https://oasis.curtin.edu.au/Auth/LogOn', '_system', 'location=yes');
    ref3.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
    ref3.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
    ref3.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
    ref3.addEventListener('exit', function(event) { alert(event.type); });
}

function openBus() {
    var ref4 = window.open('http://www.curtin.edu.my/future/curtin_shuttle.htm', '_system', 'location=yes');
    ref4.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
    ref4.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
    ref4.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
    ref4.addEventListener('exit', function(event) { alert(event.type); });
}

function openCurtin() {
    var ref5 = window.open('http://www.curtin.edu.my', '_blank', 'location=no');
    ref5.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
    ref5.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
    ref5.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
    ref5.addEventListener('exit', function(event) { alert(event.type); });
}

function openLibrary() {
    var ref6 = window.open('http://library.curtin.edu.my', '_blank', 'location=no');
    ref6.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
    ref6.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
    ref6.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
    ref6.addEventListener('exit', function(event) { alert(event.type); });
}

function openImpDate() {
    var ref7 = window.open('http://www.curtin.edu.my/current/important_dates.htm', '_blank', 'location=no');
    ref7.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
    ref7.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
    ref7.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
    ref7.addEventListener('exit', function(event) { alert(event.type); });
}

function openPubHoliday() {
    var ref8 = window.open('http://www.curtin.edu.my/current/calendar.htm', '_blank', 'location=no');
    ref8.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
    ref8.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
    ref8.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
    ref8.addEventListener('exit', function(event) { alert(event.type); });
}

function openEvent() {
    var ref9 = window.open('http://www.curtin.edu.my/campusnews/calendarevent.php', '_blank', 'location=no');
    ref9.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
    ref9.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
    ref9.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
    ref9.addEventListener('exit', function(event) { alert(event.type); });
}