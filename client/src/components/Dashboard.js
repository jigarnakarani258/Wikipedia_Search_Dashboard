import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Paper } from "@mui/material";
import Charts from "./Charts";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Header from "./Header";

const Dashboard = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const googleId = queryParams.get("googleId");

  const [past7DaysData, setPast7DaysData] = useState([]);
  const [past1DayData, setPast1DayData] = useState([]);
  const [past1HourData, setPast1HourData] = useState([]);
  const [DataCountDayWised, setDataCountDayWised] = useState([]);
  const [DataCountHourWised, setDataCountHourWised] = useState([]);

  const getPast7DaysData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_DOMAIN}api/scorecards/7days/${googleId}`
      );
      setPast7DaysData(response.data.data);
    } catch (error) {
      console.error("Error searching Wikipedia:", error);
    }
  };

  const getPast1DayData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_DOMAIN}api/scorecards/7days/${googleId}`
      );
      setPast1DayData(response.data.data);
    } catch (error) {
      console.error("Error searching Wikipedia:", error);
    }
  };

  const getPast1HourData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_DOMAIN}api/scorecards/1hour/${googleId}`
      );
      setPast1HourData(response.data.data);
    } catch (error) {
      console.error("Error searching Wikipedia:", error);
    }
  };

  const getPast7DaysDataCountDayWised = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_DOMAIN}api/scorecards/Past7DaysDataCountDayWised/${googleId}`
      );
      let output = response.data.data ;
      setDataCountDayWised(output);
    } catch (error) {
      console.error("Error searching Wikipedia:", error);
    }
  };

  const getPast1DayDataCountHourWised = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_DOMAIN}api/scorecards/Past1DayDataCountHourWised/${googleId}`
      );
      let output = response.data.data ;
      setDataCountHourWised(output);
    } catch (error) {
      console.error("Error searching Wikipedia:", error);
    }
  };

  useEffect(() => {
    getPast7DaysData();
    getPast1DayData();
    getPast1HourData();
    getPast7DaysDataCountDayWised();
    getPast1DayDataCountHourWised();
  }, []);

  return (
    <>
      <Header />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card component={Paper} elevation={3}>
            <CardContent>
              <Typography variant="h6">Past 7 Day Search Results</Typography>
              <Typography variant="h4">{past7DaysData.length}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card component={Paper} elevation={3}>
            <CardContent>
              <Typography variant="h6">Past 1 Day Search Results</Typography>
              <Typography variant="h4">{past1DayData.length}</Typography>
            </CardContent>
          </Card>
        </Grid>


        <Grid item xs={12} sm={6} md={4}>
          <Card component={Paper} elevation={3}>
            <CardContent>
              <Typography variant="h6">Past 1 Hour Search Results</Typography>
              <Typography variant="h4">{past1HourData.length}</Typography>
            </CardContent>
          </Card>
        </Grid>


        {/* Chart: Search Results Over the Last 7 Days */}
        <Grid item xs={12}>
          <Charts past7daysdata={DataCountDayWised}/>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
