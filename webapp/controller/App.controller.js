sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"LogaliUI5/HolaMundo/model/models"
], function (Controller, MessageToast, models) {
	"use strict";

	return Controller.extend("LogaliUI5/HolaMundo.controller.App", {

		onInit: function () {
			//Set model on Views
			this.getView().setModel(models.createRecipient());
		},

		onShowHello: function () {
			MessageToast.show("Hello Word");
		}
	});
});