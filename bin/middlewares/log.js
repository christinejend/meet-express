/**/

"use strict";

//Rendre dispo depuis l'extérieur ce qu'on va mettre comme valeur, export uniquement pour un fichier
module.exports = function( oRequest, oResponse, fNext ){
		console.log( "(" + oRequest.method + ")" + oRequest.url );//affiche les infos de la requetes, après il faut une reponse à requete -> fNext
		fNext(); // Fonction d'express
	} ; 

