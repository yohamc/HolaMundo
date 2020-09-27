sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("LogaliUI5/HolaMundo.controller.App", {

		onInit: function () {
			//Set model on View
			var oData = {
				recipient: {
					name: "Word"
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
		},

		onShowHello: function () {
			MessageToast.show("Hello Word");
		}
	});
});