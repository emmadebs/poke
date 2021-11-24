import React, { Component } from "react";
import "./Widget_Attaque.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LigneAtk from './LigneAtk';

export default class Widget_Attaque extends Component{

   
    render() {
        return(
            <div class = "container" > 
                <div class= "row">
                    <div class = "col-3">
                        <Box
                            sx={{width: 300,   height: 300,
                            backgroundColor: 'primary.dark',
                            '&:hover': {backgroundColor: 'primary.main',opacity: [0.9, 0.8, 0.7],},
                            }}
                         >
                            <LigneAtk/>

                        </Box>
                    </div>
                </div>
            </div>
        )
    }

}