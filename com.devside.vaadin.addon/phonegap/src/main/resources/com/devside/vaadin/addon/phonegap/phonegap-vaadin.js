var state;

//phonegap  initialization

var pictureSource; // picture source
var destinationType; // sets the format of returned value 

// Wait for Cordova to connect with the device
//


// Cordova is ready to be used!
//
function onDeviceReady() {
	//
}

//vaadin client-side initialization'

window.com_devside_vaadin_addon_phonegap_Phonegap = function() {
	var e = this.getElement();

	e.innerHTML = "";
	state = this.getState();
	document.addEventListener("deviceready", onDeviceReady, false);

//	var connector = this;
//	$("#saveButton").click(function() {
//		//connector.onSave(vallue);
//	});
};
