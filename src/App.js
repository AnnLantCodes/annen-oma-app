import React from 'react';
import logo from './assets/annen-oma-app.png';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function App() {
    return (
        <div className="App">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <img src={logo} className="app-logo" alt="logo" />
                </Grid>
                <Grid item xs={6}>
                    <Paper className="table-paper">
                        Tähän tulee taulukko
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className="statistics-paper">
                        Tähän tulee kuvaaja
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
