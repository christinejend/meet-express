/* 
*/

"use strict";

var express = require("express"),
	responseTime = require("response-time"),
	bodyParser = require("body-parser"),
	mainRoutes = require("./routes/main"),
	logMiddleW = require("./middlewares/log.js"), //Pas obliger de mettre .js
	oApp;

	//SETUP EXPRESS
	oApp = express(); //MAis il faut encore configurer une root et attribuer un port pour notre serveur

//MIDDLEWARES
	//Module qui calcul le temps de reponse
	oApp.use(responseTime());
	//Gere toutes les requetes, interprete les requetes en post
	oApp.use(bodyParser.urlencoded({
		"extended": true
	}));
	oApp.use( bodyParser.json() );
	//MIDDLE WAIR DE CONNEXION, 
	oApp.use( logMiddleW );
	oApp.use( express.static(__dirname + "/../static"));
//---


	// Configure le moteur de template voir guide sur site 
	oApp.set( "views", __dirname + "/views"); //Definit une proppriété, qui est le dossier dans lequel on va stocker les fichers template
	oApp.set("view engine", "pug"); //Utilise le moteur de template hbs, definit le lg a utiliser

	// Configuration ROOT
	//1 
	/*oApp.get("/", function( oRequest, oResponse){ //oRequest info sur la requete faite par un user oResponse permet de créer la réponse
			//oResponse.send( "Hello, world !");
			//Controleur de route
			oResponse.render("index", {
			"name": "Chris"
			}); // le .hbs est faculatif, premier para = fichier de template a aller chercher, le deuxieme sont des var que l'ont va transmettre au template
		} );
	*/

	oApp.use(mainRoutes);
	//Ecoute toute les communications sur un n° de port
	oApp.listen( 8080, function(){
		console.log("Express is listening on port 8080");
	} );

	//Express serveur web, qui a besoin de réagir a des root
	//oApp est notre instance de serveur, 