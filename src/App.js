import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import {
  BarLineChart,
  PieChart,
  Info1,
  Info2
} from './dashboard';




function App() {
    return (
      <div>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <BarLineChart />
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            xl={3}
            xs={8}
          >
            <PieChart />
          </Grid>
          
          <Grid
            item
            lg={11}
            md={11}
            xl={9}
            xs={12}
          >
            <Info2 />
          </Grid>
        </Grid>
      </div>
    );
  };

export default App;
