const express = require("express");
const {
  wikipediaDashboard,
  userWiseSearchData,
  get7DaysSeachHistory,
  get1DaySeachHistory,
  get1HourSeachHistory,
  Past7DaysDataCountDayWised,
  Past1DayDataCountHourWised
} = require("../controllers/dashboardController");
const userRouter = express.Router();

userRouter.route(`/wikipedia-dashboard/`).get(wikipediaDashboard);
userRouter.route(`/wikipedia-dashboard-user/`).get(userWiseSearchData);

// Route to get Past 7 Day scorecard data
userRouter.route("/scorecards/7days/:googleId").get(get7DaysSeachHistory);

// Route to get Past 1 Day scorecard data
userRouter.route("/scorecards/1day/:googleId").get(get1DaySeachHistory);

// Route to get Past 1 Hour scorecard data
userRouter.route("/scorecards/1hour/:googleId").get(get1HourSeachHistory);

// Route to get data for charts - Past7 Days DataCount DayWised
userRouter.route("/scorecards/Past7DaysDataCountDayWised/:googleId").get(Past7DaysDataCountDayWised);

// Route to get data for charts - Past1 Day DataCount HourWised
userRouter.route("/scorecards/Past1DayDataCountHourWised/:googleId").get(Past1DayDataCountHourWised);

module.exports = userRouter;
