const express = require("express");
const {
  wikipediaDashboard,
  userWiseSearchData,
  get7DaysSeachHistory,
  get1DaySeachHistory,
  get1HourSeachHistory,
} = require("../controllers/dashboardController");
const passport = require("passport");
const userRouter = express.Router();

userRouter.route(`/wikipedia-dashboard/`).get(wikipediaDashboard);
userRouter.route(`/wikipedia-dashboard/:googleId`).get(userWiseSearchData);

// Route to get Past 7 Day scorecard data
userRouter.route("/scorecards/7days/:googleId").get(get7DaysSeachHistory);

// Route to get Past 1 Day scorecard data
userRouter.route("/scorecards/1day/:googleId").get(get1DaySeachHistory);

// Route to get Past 1 Hour scorecard data
userRouter.route("/scorecards/1hour/:googleId").get(get1HourSeachHistory);

module.exports = userRouter;
