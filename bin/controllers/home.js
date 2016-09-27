/**/

"use strict"; 
//Controlleur de routes, exécuter quand on arrive sur cette route

var Buddies = require("../models/buddies.js"); //inclut le model buddies

	module.exports = function( oRequest, oResponse){ //oRequest info sur la requete faite par un user oResponse permet de créer la réponse
			//oResponse.send( "Hello, world !");

			Buddies.get( function(oError, aBuddies){
				if(oError){
					console.log("error" , oError);
				}

				if(oRequest.query.clean != null){
					return Buddies.set([], function(oSaveError){
						if(oSaveError){
							console.log("SaveError:", oSaveError);
						}
					oResponse.render("index", {
						"buddies": []
					})

					} );
				}

				oResponse.render("index", { //Render fait un rendu du template avec un obj et des variables
				"buddies": aBuddies || []
			})
			//Controleur de route
			
			} );
	};