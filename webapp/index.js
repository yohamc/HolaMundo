sap.ui.define([
		"sap/m/Text"
	],

	// function () {
	// 	/*eslint-disable no-alert */
	// 	alert("UI cargado");
	// 	/*eslint-enable no-alert */
	// });

	function (Text) {
		new Text({
			text: "Hello Word!"
		}).placeAt("content");
	});