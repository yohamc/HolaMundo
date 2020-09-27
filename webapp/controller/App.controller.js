sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"LogaliUI5/HolaMundo/model/models",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, models, ResourceModel) {
	"use strict";

	return Controller.extend("LogaliUI5/HolaMundo.controller.App", {

		onInit: function () {
			//Set model on Views
			this.getView().setModel(models.createRecipient());

			//Set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName: "LogaliUI5.HolaMundo.i18n.i18n"
			});
			
			this.getView().setModel(i18nModel, "i18n");
		},

		onShowHello: function () {
			MessageToast.show("Hello Word");
		}
	});
});