/* */


"use strict";

var Buddies = require("../models/buddies");

module.exports = function( oRequest, oResponse){
	//Recup les buddies
	Buddies.get( function (oError, aBuddies){
		var POST = oRequest.body,
			sName = ( POST.name || "").trim(), // || if
			sDescription= ( POST.description || "").trim(),
			oNewBuddy;;

		if(oError){
			console.log("Error:", oError);
		}
		//console.log(oRequest.body);

		//Vérification des champs d'envoit desc et nom
		if (!sName || !sDescription){
			return oResponse.render("index", {
				"buddies": aBuddies || [],
				"hasErrors": true,
				"post":{
					"name": sName,
					"description" : sDescription
				}
			});
		}
		//ENsuite on peut crée e new buddy
		oNewBuddy = {
			"name": sName,
			"description" : sDescription
		};

		aBuddies.push(oNewBuddy);

		Buddies.set(aBuddies, function(oSaveError){ //aBuddies = tab buddies existant + le nouveau
			if( oRequest.get("X-Requested-With") === "XMLHttpRequest"){
				return oResponse.json({
					"name": sName,
					"description": sDescription,
					"avatar": "http://api.adorable.io/avatars/90/" + sName + "png",
					"alt": "avatar de " + sName
				})
			}
			oResponse.render("index", {
				"buddies": aBuddies || [],
				"hasErrors": !!oSaveError,
				"post": {}
			})
		});
	});

};