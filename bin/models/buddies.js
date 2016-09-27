/* */


"use strict";

var fs = require("fs"),
	sDataFilePath = __dirname + "/../../data/buddies.json";

// On exporte pls fichier

//Method Get
exports.get = function( fNext ){ //fct asynchrone
	//Read buddies.json
	fs.readFile( sDataFilePath, "utf-8", function( oError, sFileContent){
		var aBuddies = [];

		if( oError){
			return fNext(oError);
		}

		try {
			// Parsé un json
			aBuddies = JSON.parse( sFileContent );
		} catch (oJSONError){
			return fNext(oJSONError);
		}
		
		fNext(null, aBuddies);
	} );

};

//Method Post
exports.set = function( aBuddies, fNext ){ //fct asynchrone
	//Write buddies.json
	fs.writeFile(sDataFilePath, JSON.stringify(aBuddies), "utf-8", fNext );

};
