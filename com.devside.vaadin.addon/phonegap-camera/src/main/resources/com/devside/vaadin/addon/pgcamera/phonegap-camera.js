var connector;
var state ;

var pictureSource;
var destinationType;

window.com_devside_vaadin_addon_pgcamera_PhonegapCamera = function() {
	var e = this.getElement();
	state = this.getState();
	e.innerHTML = 	'<input id="'+state.buttonId+'" type="button" style="'+state.buttonStyle+'" onclick="capturePhoto();" value="Capture Photo"/> <br/>' ;
			//		"<button onclick=\"getPhoto(pictureSource.PHOTOLIBRARY);\">From Photo Library</button><br>"+
			//	    "<button onclick=\"getPhoto(pictureSource.SAVEDPHOTOALBUM);\">From Photo Album</button><br>";
					
	if (state.viewEnabled){
		e.innerHTML += '<img id="'+state.imageId+'" style="'+ state.imageStyle +'" src="'+state.imageInitialSource+'" />';
		if (state.viewImageAfterCapture){
			document.getElementById(state.imageId).style.display = 'none';
			
		}
	}
					
	pictureSource = navigator.camera.PictureSourceType;
	destinationType = navigator.camera.DestinationType;
	

	connector = this;
//	$("#saveButton").click(function() {
//		//connector.onSave(vallue);
//	});
};

function capturePhoto() {
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
	destinationType: destinationType.DATA_URL });
}

function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
      destinationType: destinationType.FILE_URI,
      sourceType: source });
  }

function onPhotoDataSuccess(imageData) {
	
    var largeImage = document.getElementById(state.imageId);
	largeImage.src = "data:image/jpeg;base64," + imageData; 
	if (state.viewImageAfterCapture){
    	largeImage.style.display = 'block';
	}
    connector.getPic("data:image/jpeg;base64," + imageData);
   
  }

function onPhotoURISuccess(imageURI) {
    var largeImage = document.getElementById(state.imageId);
    largeImage.style.display = 'block';
    largeImage.src = imageURI;
    connector.getPic("data:image/jpeg;base64," + imageURI);
  }


function onFail(message) {
	if (message == 'Camera cancelled.')
		return;
    alert('Cam failed because: ' + state.camErrorMessage);
  }