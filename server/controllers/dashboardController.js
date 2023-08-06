const { searchData } = require("../models/searchData.js");
const { catchAsync } = require("../utility/catchAsync.js");
const { AppError } = require("../utility/appError.js");
const moment = require("moment");

const wikipediaDashboard = catchAsync(async (req, res, next) => {
  let searchDataList = await searchData.find({}, { _id: 0, __v: 0 });

  return res.status(200).send({
    status: "success",
    requestAt: req.requestTime,
    NoResults: searchDataList.length,
    data: searchDataList,
  });
});

//GetCurrentUser API , Authenticated with Passport JS
const userWiseSearchData = catchAsync(async (req, res, next) => {
  let user = req.params.googleId;

  //from session
  //let user = req.user.googleId;
  let searchDataList = await searchData.find(
    { googleId: user },
    { _id: 0, __v: 0 }
  );

  return res.status(200).send({
    status: "success",
    requestAt: req.requestTime,
    NoResults: searchDataList.length,
    data: searchDataList,
  });
});

const get7DaysSeachHistory = catchAsync(async (req, res, next) => {
  let user = req.params.googleId;

  //from session
  //let user = req.user.googleId;
  const currentDate = moment().startOf("day");
  const sevenDaysAgo = moment(currentDate).subtract(7, "days");

  let searchDataList = await searchData.find(
    {
      $and: [{ googleId: user }, { date: { $gte: sevenDaysAgo.toDate() } }],
    },
    { _id: 0, __v: 0 }
  );

  return res.status(200).send({
    status: "success",
    requestAt: req.requestTime,
    NoResults: searchDataList.length,
    data: searchDataList,
  });
});

const get1DaySeachHistory = catchAsync(async (req, res, next) => {
  let user = req.params.googleId;

  //from session
  //let user = req.user.googleId;
  const currentDate = moment().startOf("day");
  const oneDaysAgo = moment(currentDate).subtract(1, "days");

  let searchDataList = await searchData.find(
    {
      $and: [{ googleId: user }, { date: { $gte: oneDaysAgo.toDate() } }],
    },
    { _id: 0, __v: 0 }
  );

  return res.status(200).send({
    status: "success",
    requestAt: req.requestTime,
    NoResults: searchDataList.length,
    data: searchDataList,
  });
});

const get1HourSeachHistory = catchAsync(async (req, res, next) => {
  let user = req.params.googleId;

  //from session
  //let user = req.user.googleId;
  const currentDate = moment();
  const oneHourAgo = moment(currentDate).subtract(1, "hours");

  let searchDataList = await searchData.find(
    {
      $and: [{ googleId: user }, { date: { $gte: oneHourAgo.toDate() } }],
    },
    { _id: 0, __v: 0 }
  );

  return res.status(200).send({
    status: "success",
    requestAt: req.requestTime,
    NoResults: searchDataList.length,
    data: searchDataList,
  });
});

module.exports = {
  wikipediaDashboard,
  userWiseSearchData,
  get7DaysSeachHistory,
  get1DaySeachHistory,
  get1HourSeachHistory,
};
