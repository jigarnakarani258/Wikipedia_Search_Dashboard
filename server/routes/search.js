const express = require("express");
const searchRouter = express.Router();
const { searchWikipedia } = require("../services/wikipedia");
const { searchData } = require("../models/searchData");
const { User } = require("../models/user");

// Protected search route
searchRouter.get("/search", async (req, res) => {
  let { q: query, googleId } = req.query;

  let user = await User.findOne({ googleId: googleId });
  if (!user) {
    return res.status(403).send({
      message: "Unauthorised user!!",
    });
  }

  //let dat = new Date("August 05, 2023 05:05:00")
  const serachData = new searchData({
    googleId: googleId,
    displayName: user.displayName,
    email: user.email,
    searchText: query,
    date: Date.now(),
  });

  let serachDataObject = await searchData.create(serachData);

  try {
    const searchResults = await searchWikipedia(query);
    return res.json(searchResults);
  } catch (error) {
    res.status(500).json({ error: "Error searching Wikipedia" });
  }
});

module.exports = searchRouter;
