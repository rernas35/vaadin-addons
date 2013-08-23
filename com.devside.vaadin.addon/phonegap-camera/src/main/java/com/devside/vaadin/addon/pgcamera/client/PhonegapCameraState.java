package com.devside.vaadin.addon.pgcamera.client;

import com.vaadin.shared.ui.JavaScriptComponentState;

public class PhonegapCameraState extends JavaScriptComponentState {

	String base64Value;
	String buttonStyle="";
	String imageStyle="";
	String  imageInitialSource = "";
	String imageId="pgCameraImage";
	String buttonId="pgCameraButton";
	String camErrorMessage;
	boolean viewImageAfterCapture = true;
	boolean viewEnabled = true;
	
//	boolean captureEnabled;
//	boolean photoLibraryEnabled;
	
	public String getCamErrorMessage() {
		return camErrorMessage;
	}
	
	public void setCamErrorMessage(String camErrorMessage) {
		this.camErrorMessage = camErrorMessage;
	}
	
	public String getButtonId() {
		return buttonId;
	}
	
	public void setButtonId(String buttonId) {
		this.buttonId = buttonId;
	}
	
	public String getImageId() {
		return imageId;
	}
	
	public void setImageId(String imageId) {
		this.imageId = imageId;
	}
	
	public boolean isViewImageAfterCapture() {
		return viewImageAfterCapture;
	}
	
	public void setViewImageAfterCapture(boolean viewImageAfterCapture) {
		this.viewImageAfterCapture = viewImageAfterCapture;
	}

	public String getImageInitialSource() {
		return imageInitialSource;
	}
	
	public void setImageInitialSource(String imageInitialSource) {
		this.imageInitialSource = imageInitialSource;
	}
	
	public String getButtonStyle() {
		return buttonStyle;
	}
	
	public boolean getViewEnabled() {
		return viewEnabled;
	}

	public void setViewEnabled(boolean viewEnabled) {
		this.viewEnabled = viewEnabled;
	}

	public void setButtonStyle(String buttonStyle) {
		this.buttonStyle = buttonStyle;
	}
	
	public void setImageStyle(String imageStyle) {
		this.imageStyle = imageStyle;
	}
	
	public String getImageStyle() {
		return imageStyle;
	}
	
	public String getBase64Value() {
		return base64Value;
	}
	
	public void setBase64Value(String base64Value) {
		this.base64Value = base64Value;
	}

//	public boolean isCaptureEnabled() {
//		return captureEnabled;
//	}
//
//	public void setCaptureEnabled(boolean captureEnabled) {
//		this.captureEnabled = captureEnabled;
//	}

//	public boolean isPhotoLibraryEnabled() {
//		return photoLibraryEnabled;
//	}
//
//	public void setPhotoLibraryEnabled(boolean photoLibraryEnabled) {
//		this.photoLibraryEnabled = photoLibraryEnabled;
//	}
	
	
	
}
