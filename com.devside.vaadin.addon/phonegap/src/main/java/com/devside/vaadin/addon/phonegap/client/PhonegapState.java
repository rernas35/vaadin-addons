package com.devside.vaadin.addon.phonegap.client;

import com.vaadin.shared.ui.JavaScriptComponentState;

public class PhonegapState extends JavaScriptComponentState{

	boolean cameraEnabled;
	
	boolean locationEnabled;

	public boolean isCameraEnabled() {
		return cameraEnabled;
	}

	public void setCameraEnabled(boolean cameraEnabled) {
		this.cameraEnabled = cameraEnabled;
	}

	public boolean isLocationEnabled() {
		return locationEnabled;
	}

	public void setLocationEnabled(boolean locationEnabled) {
		this.locationEnabled = locationEnabled;
	}
	
	
	
	
}
