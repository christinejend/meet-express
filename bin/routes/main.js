/* */

"use strict";

var oRouter = require( "express").Router(), // obj sur lequel on peut faire des . get etc on liste les routes via express
	fHomePageController = require("../controllers/home"),
	fAddBuddyController = require("../controllers/add");

	oRouter.get("/", fHomePageController ); // Définition de nos routes
	oRouter.post("/", fAddBuddyController); 

	module.exports = oRouter;
