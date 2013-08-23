package com.devside.vaadin.addon.pixastic.client;

import com.vaadin.shared.ui.JavaScriptComponentState;

public class PixasticPanelState extends JavaScriptComponentState {

	String value;
	
	public String getValue() {
		return value;
	}
	
	public void setValue(String value) {
		this.value = value;
	}
	
	
}
