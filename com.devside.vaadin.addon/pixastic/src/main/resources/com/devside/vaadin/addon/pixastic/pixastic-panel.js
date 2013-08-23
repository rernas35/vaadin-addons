

//vaadin client-side initialization'


 window.com_devside_vaadin_addon_pixastic_PixasticPanel =
         function() {
             // Create the component
	 		//init
	 
	 		var e = this.getElement();
	 
             // Handle changes from the server-side
//             this.onStateChange = function() {
            	 e.innerHTML = 	"<table><tr><td>"+
            		 			"<a href=\"#\" id=\"button\" class=\"ui-state-default ui-corner-all\">Effects</a>"+
            		 			"</tr></td><tr><td>"+
  									"<div class=\"toggler\">"+
										"<div id=\"effect\" class=\"ui-widget-content ui-corner-all\">"+
											"<h3 class=\"ui-widget-header ui-corner-all\">Effects</h3>"+
											"<input type=\"button\" value=\"sephia\" onclick=\"applySephia()\" /><br/>"+
											"<input type=\"button\" value=\"invert\" onclick=\"applyInvert()\" /><br/>"+
											"<input type=\"button\" value=\"edge\" onclick=\"applyEdge()\" /><br/>"+
											"<input type=\"button\" value=\"blur\" onclick=\"applyBlur()\" /><br/>"+
											"<input type=\"button\" value=\"lighten\" onclick=\"applyLighten()\" /><br/>"+
											"<input type=\"button\" value=\"posterize\" onclick=\"applyPosterize()\" /><br/>"+
											"<input type=\"button\" value=\"solarize\" onclick=\"applySolarize()\" /><br/>"+
											"<input type=\"button\" value=\"mosaic\" onclick=\"applyMosaic()\" /><br/>"+
										"</div>"+
  									"</div>" +
  									"<img id=\"editedImage\" style=\"width:300px;height:500px;\" />" +
  									"<input id=\"imgStrEdt\" type=\"hidden\" value=\"\" />"+
  								"</tr></td><tr><td>"+
  									" <input id=\"saveButton\" type=\"button\" value=\"save\" />"+
            	 					 "<div style=\"visibility:hidden\" >"+
            	 						"<canvas id=\"tempCanvas\" width=\"320\" height=\"520\" />" +
            	 					"</div>"+
            	 				"</tr></td></table>";	
            	 initEffect();	
            	 runEffect();
                 document.getElementById("editedImage").src = this.getState().value;
//             }
             // Pass user interaction to the server-side
             var connector = this;
             $( "#saveButton" ).click(function() {
            	 move2canvas();
            	 var vallue = document.getElementById("imgStrEdt").value;
            	 connector.onSave(vallue);
       	    });
};



//jquery initialization 
	function initEffect() {
		
	    // set effect from select menu value
	    $( "#button" ).click(function() {
	      runEffect();
	      return false;
	    });
		
	}
	
	
	
    function runEffect() {
	      // get effect type from
	      var selectedEffect = 'fold';
	 
	      // most effect types need no options passed by default
	      var options = {};
	      // some effects have required parameters
	      if ( selectedEffect === "scale" ) {
	        options = { percent: 0 };
	      } else if ( selectedEffect === "size" ) {
	        options = { to: { width: 200, height: 60 } };
	      }
	 
	      // run the effect
	      $( "#effect" ).toggle( selectedEffect, options, 500 );
	    };

	
 
//pixastic functions and initialization
	function  applySephia(){
		var img = document.getElementById("editedImage");
		Pixastic.process(img, "sepia");
	}
	
	function  applyInvert(){
		var img = document.getElementById("editedImage");
		Pixastic.process(img, "invert");
	}
	
	function  applyEdge(){
		var img = document.getElementById("editedImage");
		Pixastic.process(img, "edges", {mono:true,invert:false});
	}
	
	function  applyBlur(){
		var img = document.getElementById("editedImage");
		Pixastic.process(img, "blur");
	}
	
	function  applyLighten(){
		var img = document.getElementById("editedImage");
		Pixastic.process(img, "lighten", {amount:0.5});
	}
	
	function  applyPosterize(){
		var img = document.getElementById("editedImage");
		Pixastic.process(img, "posterize", {levels:10});
	}
	
	function  applySolarize(){
		var img = document.getElementById("editedImage");
		Pixastic.process(img, "solarize");
	}
	
	function  applyMosaic(){
		var img = document.getElementById("editedImage");
		Pixastic.process(img, "mosaic", {blockSize:2});
	}
	
	function move2canvas(){
		var c=document.getElementById("tempCanvas");
		var ctx=c.getContext("2d");
		var img=document.getElementById("editedImage");
		ctx.drawImage(img,10,10);
		var div2 = document.createElement('div');
		div2.innerHTML= c.toDataURL("image/jpeg");
//		document.getElementById('output').appendChild(div2);
		document.getElementById('imgStrEdt').value = c.toDataURL("image/jpeg"); 
//		getElementByType("hiddenEdited","text").focus();
//		getElementByType("hiddenEdited","text").value = document.getElementById("imgStrEdt").value;
//		getElementByType("hiddenEdited","text").blur();
//		document.getElementById('testImage').src = document.getElementById("imgStrEdt").value;
	}	
	
	function getElementByType(containerId,type){
		div = parent.document.getElementById(containerId);
		for (var i = 0; i < div.childNodes.length; i++) {
		    if (div.childNodes[i].type == type) {
		      return div.childNodes[i];
		    }        
		}
	}
	
	function getElementByTag(containerId,tagName){
		div = parent.document.getElementById(containerId);
		for (var i = 0; i < div.childNodes.length; i++) {
		    if (div.childNodes[i].tagName.toUpperCase() == tagName.toUpperCase()) {
		      return div.childNodes[i];
		    }        
		}
	}
	

	function fileSelect(evt) {
		if (window.File && window.FileReader && window.FileList && window.Blob) {
			var files = evt.target.files;
	
			var result = '';
			var file;
			for ( var i = 0; file = files[i]; i++) {
				// if the file is not an image, continue
				if (!file.type.match('image.*')) {
					continue;
				}
	
				reader = new FileReader();
				reader.onload = (function(tFile) {
					return function(evt) {
						var div = document.createElement('div');
						div.innerHTML = '<img id="orgImage" style="width:300px;height:500px;" src="'
								+ evt.target.result + '" />';
						document.getElementById('orgPreview').appendChild(div);
						var div = document.createElement('div');
						div.innerHTML = '<img id="editedImage" style="width:300px;height:500px;" src="'
								+ evt.target.result + '" />';
						document.getElementById('editedPreview').appendChild(div);
	
						var c = document.getElementById("tempCanvas");
						var ctx = c.getContext("2d");
						var img = document.getElementById("orgImage");
						ctx.drawImage(img, 10, 10);
						document.getElementById('imgStrOrg').value = c
								.toDataURL("image/jpeg");
	
					};
				}(file));
				reader.readAsDataURL(file);
			}
		} else {
			alert('The File APIs are not fully supported in this browser.');
		}
	}
document.getElementById('filesToUpload').addEventListener('change', fileSelect, false);

getElementByTag('designerFrame','iframe').scrolling = 'no';
