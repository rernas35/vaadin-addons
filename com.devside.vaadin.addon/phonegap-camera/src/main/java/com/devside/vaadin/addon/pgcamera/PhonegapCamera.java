package com.devside.vaadin.addon.pgcamera;

import java.io.Serializable;
import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONException;

import com.devside.vaadin.addon.pgcamera.client.PhonegapCameraState;
import com.vaadin.annotations.JavaScript;
import com.vaadin.ui.AbstractJavaScriptComponent;
import com.vaadin.ui.JavaScriptFunction;

@JavaScript({"phonegap-camera.js",
			//"cordova.js",
			//"cordova_plugins.js",
			"Camera.js",
			"CameraConstants.js",
			"CameraPopoverHandle.js",
			"CameraPopoverOptions.js"
			})
public class PhonegapCamera extends AbstractJavaScriptComponent {

	private static final long serialVersionUID = 5576298799194135864L;

	public interface PictureCaptureListener extends Serializable {
		void valueChange(String value);
	}
	
	ArrayList<PictureCaptureListener> listeners ;
	
	public PhonegapCamera() {
		listeners = new ArrayList<PhonegapCamera.PictureCaptureListener>();
	}
	
	@Override
	public void attach() {
		
		addFunction("getPic", new JavaScriptFunction() {
			
			@Override
			public void call(JSONArray arguments) throws JSONException {
				getState().setBase64Value(arguments.getString(0));
				for (PictureCaptureListener listener : listeners) {
					listener.valueChange(getState().getBase64Value());
				}
				
			}
		});
		
		super.attach();
	}
	
	public PhonegapCameraState getCameraState() {
		return (PhonegapCameraState) super.getState();
	}
	
	@Override
	protected PhonegapCameraState getState() {
		return (PhonegapCameraState) super.getState();
	}
	
	
	public void addListenerr(PictureCaptureListener listener){
		listeners.add(listener);
	}
}
