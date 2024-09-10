import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Paper } from '@mui/material';

const patient = () => {
  // Sample data
  const recordedData = {
    fetalMovement: 10,
    uterineContraction: 5,
    baselineHeartRate: 140,
    abnormalityPercentage: 15,
    averageFetalValue: 120,
    expectedData: {
      fetalMovement: 12,
      uterineContraction: 3,
      baselineHeartRate: 130,
      abnormalityPercentage: 5,
      averageFetalValue: 130,
    },
  };

  const compareValues = (recorded, expected) => {
    return {
      fetalMovement: recorded.fetalMovement >= expected.fetalMovement,
      uterineContraction: recorded.uterineContraction <= expected.uterineContraction,
      baselineHeartRate: recorded.baselineHeartRate >= expected.baselineHeartRate,
      abnormalityPercentage: recorded.abnormalityPercentage <= expected.abnormalityPercentage,
      averageFetalValue: recorded.averageFetalValue >= expected.averageFetalValue,
    };
  };

  const comparisonResults = compareValues(recordedData, recordedData.expectedData);

  return (
    <Container>
      <AppBar >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Patient Portal
          </Typography>
          <Button color="inherit">Schedule Appointment</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      
      <Typography variant="h4" sx={{ margin: '20px 0' }}>
        Recorded Data
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5">Fetal Movement: {recordedData.fetalMovement}</Typography>
            <Typography variant="body1">Expected: {recordedData.expectedData.fetalMovement}</Typography>
            <Typography variant="body2" color={comparisonResults.fetalMovement ? "green" : "red"}>
              {comparisonResults.fetalMovement ? "Within Expected Range" : "Below Expected Range"}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5">Uterine Contraction: {recordedData.uterineContraction}</Typography>
            <Typography variant="body1">Expected: {recordedData.expectedData.uterineContraction}</Typography>
            <Typography variant="body2" color={comparisonResults.uterineContraction ? "green" : "red"}>
              {comparisonResults.uterineContraction ? "Within Expected Range" : "Above Expected Range"}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5">Baseline Heart Rate: {recordedData.baselineHeartRate}</Typography>
            <Typography variant="body1">Expected: {recordedData.expectedData.baselineHeartRate}</Typography>
            <Typography variant="body2" color={comparisonResults.baselineHeartRate ? "green" : "red"}>
              {comparisonResults.baselineHeartRate ? "Within Expected Range" : "Below Expected Range"}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5">Abnormality Percentage: {recordedData.abnormalityPercentage}%</Typography>
            <Typography variant="body1">Expected: {recordedData.expectedData.abnormalityPercentage}%</Typography>
            <Typography variant="body2" color={comparisonResults.abnormalityPercentage ? "green" : "red"}>
              {comparisonResults.abnormalityPercentage ? "Within Expected Range" : "Above Expected Range"}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5">Average Fetal Value: {recordedData.averageFetalValue}</Typography>
            <Typography variant="body1">Expected: {recordedData.expectedData.averageFetalValue}</Typography>
            <Typography variant="body2" color={comparisonResults.averageFetalValue ? "green" : "red"}>
              {comparisonResults.averageFetalValue ? "Within Expected Range" : "Below Expected Range"}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default patient;
