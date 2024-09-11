import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import dayjs from "dayjs";

const Patient = () => {
  const navigate = useNavigate();
  const [filterDate, setFilterDate] = useState(""); // For date filtering

  // Function to handle navigation to the home page
  const handleGoToHomePage = () => {
    navigate("/"); // Adjust the path to your home page
  };

  // Function to handle log out and return to home
  const handleLogout = () => {
    // Add your log-out logic here
    navigate("/");
  };

  // Generate random data for 24 days
  const generatePatientData = () => {
    const data = [];
    for (let i = 0; i < 24; i++) {
      const date = dayjs().subtract(i, "day").format("MMMM D, YYYY");
      data.push({
        date,
        prediction: `Prediction for ${date}`, // Placeholder prediction
        parameters: [
          {
            name: "Baseline Fetal Heart Rate",
            value: Math.floor(Math.random() * 51) + 110, // Random between 110 and 160
            lowerBound: 0,
            upperBound: 0,
          },
          {
            name: "Accelerations",
            value: Math.random().toFixed(3), // Random decimal
            lowerBound: 0,
            upperBound: 0,
          },
          {
            name: "Fetal Movement",
            value: Math.random().toFixed(2), // Random decimal
            lowerBound: 0,
            upperBound: 0,
          },
          {
            name: "Uterine Contractions",
            value: Math.random().toFixed(3), // Random decimal
            lowerBound: 0,
            upperBound: 0,
          },
          {
            name: "Light Decelerations",
            value: Math.random().toFixed(3), // Random decimal
            lowerBound: 0,
            upperBound: 0,
          },
          {
            name: "Severe Decelerations",
            value: Math.random().toFixed(3), // Random decimal
            lowerBound: 0,
            upperBound: 0,
          },
          {
            name: "Prolonged Decelerations",
            value: Math.random().toFixed(3), // Random decimal
            lowerBound: 0,
            upperBound: 0,
          },
          {
            name: "Abnormal Short Term Variability",
            value: Math.floor(Math.random() * 101), // Random between 0 and 100
            lowerBound: 0,
            upperBound: 0,
          },
          {
            name: "Mean Value of Short Term Variability",
            value: (Math.random() * 2).toFixed(1), // Random between 0 and 2
            lowerBound: 0,
            upperBound: 0,
          },
          {
            name: "Percentage of Time with Abnormal Long Term Variability",
            value: Math.floor(Math.random() * 101), // Random between 0 and 100
            lowerBound: 0,
            upperBound: 0,
          },
          {
            name: "Mean Value of Long Term Variability",
            value: (Math.random() * 10).toFixed(1), // Random between 0 and 10
            lowerBound: 0,
            upperBound: 0,
          },
        ],
      });
    }
    return data;
  };

  const patientData = generatePatientData();

  // Handle date filtering
  const filteredData = patientData.filter((dayData) =>
    filterDate ? dayData.date.includes(filterDate) : true
  );

  return (
    <Container>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Patient Portal
          </Typography>
          <Button color="inherit" onClick={handleGoToHomePage}>
            Home Page
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Typography variant="h4" sx={{ margin: "20px 0" }}>
        Recorded Data
      </Typography>

      {/* Date Filter Input */}
      <TextField
        label="Filter by Date (e.g., September 10, 2024)"
        variant="outlined"
        fullWidth
        value={filterDate}
        onChange={(e) => setFilterDate(e.target.value)}
        sx={{ marginBottom: 3 }}
      />

      <Grid container spacing={3}>
        {filteredData.map((dayData, index) => (
          <Grid item xs={12} key={index}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">
                  {dayData.date} - {dayData.prediction}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {dayData.parameters.map((param, paramIndex) => (
                    <Grid item xs={6} key={paramIndex}>
                      <Paper elevation={3} sx={{ padding: 2 }}>
                        <Typography variant="h6">{param.name}</Typography>
                        <Typography>{param.value}</Typography>
                        {/* Skip range check for "Baseline Fetal Heart Rate" */}
                        {param.name !== "Baseline Fetal Heart Rate" && param.lowerBound > 0 && param.upperBound > 0 && (
                          <Typography
                            variant="body2"
                            color={
                              param.value >= param.lowerBound && param.value <= param.upperBound
                                ? "green"
                                : "red"
                            }
                          >
                            {param.value >= param.lowerBound && param.value <= param.upperBound
                              ? "Within Expected Range"
                              : "Out of Expected Range"}
                          </Typography>
                        )}
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Patient;
