package com.devside.vaadin.addon.pixastic;

import java.io.Serializable;
import java.util.ArrayList;

import javax.swing.JSlider;

import org.json.JSONArray;
import org.json.JSONException;

import com.devside.vaadin.addon.pixastic.client.PixasticPanelState;
import com.vaadin.annotations.JavaScript;
import com.vaadin.ui.AbstractJavaScriptComponent;
import com.vaadin.ui.JavaScriptFunction;


@JavaScript({"jquery-1.9.1.js","jquery-ui.js","pixastic.custom.js","pixastic-panel.js"})
public class PixasticPanel extends AbstractJavaScriptComponent {

	private static final long serialVersionUID = 4358684753876041239L;
	
	String initValue = "";
	
	  public interface ValueChangeListener extends Serializable {
          void valueChange(String value);
      }
	  
	  final ArrayList<ValueChangeListener> listeners; 
	  
	  public PixasticPanel(){
		  this(null);
	  }
	  
	  public PixasticPanel(String value) {
		  super();
		  this.initValue = value;
		  listeners = new ArrayList<ValueChangeListener>();
		  
	  }
	  
	  @Override
	public void attach() {
		super.attach();
		if (initValue != null){
			  getState().setValue(initValue);
		  }
		  addFunction("onSave", new JavaScriptFunction() {
			
			public void call(JSONArray arguments) throws JSONException {
				getState().setValue(arguments.getString(0));
				for (ValueChangeListener listener : listeners) {
					listener.valueChange(getState().getValue());
				}
			}
		});
	}

      public void addListener(ValueChangeListener listener) {
          listeners.add(listener);
      }
      public void setValue(String value) {
          getState().setValue(value);
}
      public String getValue() {
          return getState().getValue();
}
      @Override
      protected PixasticPanelState getState() {
          return (PixasticPanelState) super.getState();
      }

	
	
}
