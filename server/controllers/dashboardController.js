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

const Past7DaysDataCountDayWised = catchAsync(async (req, res, next) => {
  let user = req.params.googleId;

  const currentDate = moment().startOf("day");
  const sevenDaysAgo = moment(currentDate).subtract(7, "days");

  let searchDataList = await searchData.aggregate([
    {
      $match: {
        googleId: user,
        date: { $gte: sevenDaysAgo.toDate()}
      },
    },
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        date: "$_id",
        count: 1,
        _id: 0
      }
    },
    {
      $sort: {
        date: 1
      }
    }
  ]);

  return res.status(200).send({
    status: "success",
    requestAt: req.requestTime,
    data: searchDataList,
  });
});

const Past1DayDataCountHourWised = catchAsync(async (req, res, next) => {
  let user = req.params.googleId;

  const currentDate = moment().startOf("hour"); 
  const oneDayAgo = moment(currentDate).subtract(1, "days");

  let searchDataList = await searchData.aggregate([
    {
      $match: {
        googleId: user,
        date: { $gte: oneDayAgo.toDate() }
      },
    },
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m-%d %H:00", date: "$date" } },
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        hour: "$_id",
        count: 1,
        _id: 0
      }
    },
    {
      $sort: {
        hour: 1
      }
    }
  ]);

  return res.status(200).send({
    status: "success",
    requestAt: req.requestTime,
    data: searchDataList,
  });
});



module.exports = {
  wikipediaDashboard,
  userWiseSearchData,
  get7DaysSeachHistory,
  get1DaySeachHistory,
  get1HourSeachHistory,
  Past7DaysDataCountDayWised,
  Past1DayDataCountHourWised
};
