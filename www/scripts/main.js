document.addEventListener("deviceready", onDeviceReady, false);

//Activate :active state
document.addEventListener("touchstart", function() {
}, false);

function onDeviceReady() {
	var app;
	navigator.splashscreen.hide();
	app = new Application();
	app.run();
}

function Application() {
}

Application.prototype = {

	run: function() {
		var that = this,
			//openLocal = document.getElementById("openLocal"),
			//openExternalInAppBrowser = document.getElementById("openExternalInAppBrowser"),
			//openExternalPDF = document.getElementById("openExternalPDF"),
			//openExternalInSystemBrowser = document.getElementById("openExternalInSystemBrowser"); 

			openMoodleISB = document.getElementById("openMoodleISB"),
			openOasisISB = document.getElementById("openOasisISB"),
			openBlackboardISB = document.getElementById("openBlackboardISB"),
			openShuttleBusScheduleISB = document.getElementById("openShuttleBusScheduleISB"),

			openCurtinIAB = document.getElementById("openCurtinIAB"),
			openCurtinLibIAB = document.getElementById("openCurtinLibIAB"),
			openImportantDateIAB = document.getElementById("openImportantDateIAB"),
			openPublicHolidayIAB = document.getElementById("openPublicHolidayIAB"),
			openCurtinEventIAB = document.getElementById("openCurtinEventIAB");

			openMoodleISB.addEventListener("click", that.openMoodleISB);
			openOasisISB.addEventListener("click", that.openOasisISB);
			openBlackboardISB.addEventListener("click", that.openBlackboardISB);
			openShuttleBusScheduleISB.addEventListener("click", that.openShuttleBusScheduleISB);

			openCurtinIAB.addEventListener("click", that.openCurtinIAB);
			openCurtinLibIAB.addEventListener("click", that.openCurtinLibIAB);
			openImportantDateIAB.addEventListener("click", that.openImportantDateIAB);
			openPublicHolidayIAB.addEventListener("click", that.openPublicHolidayIAB);
			openCurtinEventIAB.addEventListener("click", that.openCurtinEventIAB);
			//openLocal.addEventListener("click", that.openLocal);
			//openExternalInAppBrowser.addEventListener("click", that.openExternalInAppBrowser);
			//openExternalPDF.addEventListener("click", that.openExternalPDF);
			//openExternalInSystemBrowser.addEventListener("click", that.openExternalInSystemBrowser);
	},

	openMoodleISB: function() {
		window.open("http://moodle.curtin.edu.my/login/index.php", "_system");
	},

	openOasisISB: function() {
		window.open("https://oasis.curtin.edu.au/Auth/LogOn", "_system");
	},

	openBlackboardISB: function() {
		window.open("https://lms.curtin.edu.au/webapps/portal/frameset.jsp", "_system");
	},

	openShuttleBusScheduleISB: function() {
		window.open("http://www.curtin.edu.my/future/curtin_shuttle.htm", "_system");
	},

	openCurtinIAB: function() {
		window.open("http://www.curtin.edu.my", "_blank");
	},

	openCurtinLibIAB: function() {
		window.open("http://library.curtin.edu.my", "_blank");
	},

	openImportantDateIAB: function() {
		window.open("http://www.curtin.edu.my/current/important_dates.htm", "_blank");
	},

	openPublicHolidayIAB: function() {
		window.open("http://www.curtin.edu.my/current/calendar.htm", "_blank");
	},

	openCurtinEventIAB: function() {
		window.open("http://www.curtin.edu.my/campusnews/calendarevent.php", "_blank");
	}
}