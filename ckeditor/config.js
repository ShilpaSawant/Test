/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	var lite = config.lite = config.lite || {};
	//config.uiColor = '#ffffff';
	config.extraPlugins = 'lite';
	config.height = '400px';
	//lite.isTracking = false;
	lite.userName = document.getElementById("users").value;
	lite.userId = document.getElementById("userid").value;
};
