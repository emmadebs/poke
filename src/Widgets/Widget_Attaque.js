import React, { Component } from "react";
import "./Widget_Attaque.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LigneAtk from './LigneAtk';
import LigneAtk2 from './LigneAtk2';

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>


export default class Widget_Attaque extends Component{
    render() {
        return(
            <div class = "container" > 
                <div class= "row">
                    <div class = "col-3">
                        <Box
                            display="flex"
                            alignItems="center"
                            sx={{width: 300,   height: 300,
                            backgroundColor: 'primary.dark',
                            '&:hover': {backgroundColor: 'primary.main',opacity: [0.9, 0.8, 0.7],},
                            }}
                         >
                                    <LigneAtk/>
                        </Box>
                    </div>
                </div>
                {/*<div class= "row">
                    <div class = "col-4">
                        <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Light card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
                    </div>
                        </div>*/}
            </div>
        )
    }

}