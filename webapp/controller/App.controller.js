sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("LogaliUI5/HolaMundo.controller.App", {

		onShowHello: function () {
			/*eslint-disable no-alert*/
			alert("Hello Word");
			/*eslint-enable no-alert*/
		}
	});
});