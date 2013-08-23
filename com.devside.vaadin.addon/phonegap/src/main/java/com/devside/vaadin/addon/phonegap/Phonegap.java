package com.devside.vaadin.addon.phonegap;

import com.devside.vaadin.addon.phonegap.client.PhonegapState;
import com.vaadin.annotations.JavaScript;
import com.vaadin.ui.AbstractJavaScriptComponent;


@JavaScript({"cordova.js",
			"phonegap-vaadin.js",
			"cordova_plugins.js",
			"phonegap.js"})



public class Phonegap extends AbstractJavaScriptComponent{

	private static final long serialVersionUID = 7007073995271575118L;
	

	public Phonegap() {
		// TODO Auto-generated constructor stub
	}
	
	@Override
	public void attach() {
		super.attach();
	}
	
	@Override
	protected PhonegapState getState() {
		// TODO Auto-generated method stub
		return (PhonegapState) super.getState();
	}
	
	
}
