const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const lisitngController = require("../controllers/listing.js");
 
//Index Route or Create Route
router.route("/")
.get(wrapAsync(lisitngController.index))
.post( isLoggedIn, validateListing, wrapAsync(lisitngController.createListing));
  
  //New Route
  router.get("/new", isLoggedIn, (req, res) => {
    res.render("listings/new.ejs");
  });

// Show route Or Update route or delete Route
router.route("/:id")
.get(wrapAsync(lisitngController.showListing))
.put(isLoggedIn, isOwner ,validateListing, wrapAsync(lisitngController.updateListing))
.delete(isLoggedIn, isOwner, wrapAsync(lisitngController.destroyListing));

//Edit Route
router.get("/:id/edit",isLoggedIn, isOwner, wrapAsync(lisitngController.renderEditForm));

module.exports = router;