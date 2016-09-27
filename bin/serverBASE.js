/* 
*/

"use strict";

var express = require("express"),
	oApp;

	//SETUP EXPRESS
	oApp = express(); //MAis il faut encore configurer une root et attribuer un port pour notre serveur

	//MIDDLE WAIR DE CONNEXION, 
	oApp.use( function( oRequest, oResponse, fNext ){
		console.log( "(" + oRequest.method + ")" + oRequest.url );//affiche les infos de la requetes, après il faut une reponse à requete -> fNext
		fNext(); // Fonction d'express
	} );

	// DO ROOT
	//1 
	oApp.get("/", function( oRequest, oResponse){ //oRequest info sur la requete faite par un user oResponse permet de créer la réponse
			oResponse.send( "Hello, world !");
		} );
	//Ecoute toute les communications sur un n° de port

	oApp.listen( 8080, function(){
		console.log("Express is listening on port 8080");
	} );

	//Express serveur web, qui a besoin de réagir a des root
	//oApp est notre instance de serveur, 