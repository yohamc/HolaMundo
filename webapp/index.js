sap.ui.define([
		"sap/ui/core/mvc/XMLView"
	],

	function (XMLView) {
		
		XMLView.create({
			viewName: "LogaliUI5.HolaMundo.view.App"
		}).then(function (oView){ 
			oView.placeAt("content"); 
		});
	});