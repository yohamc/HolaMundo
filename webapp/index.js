sap.ui.define([
		"sap/ui/core/ComponentContainer"
	],

	function (ComponentContainer) {

		new ComponentContainer({
			name: "LogaliUI5.HolaMundo",
			settings: {
				id: "LogaliUI5"
			},
			async: true
		}).placeAt("content");
	});