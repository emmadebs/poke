import { Update } from "@material-ui/icons";
import { DisplaySettingsRounded } from "@mui/icons-material";
import axios from "axios";
import React, { useState } from 'react';
import "../components/Navbar.css";

export default function Type () {
    const [nbPokeType, setnbPokeType] = useState("");
    const [namePokeType, setnamePokeType] = useState("");
    var nbpok=[];
    var nameType=[];
    var nb=0;

    var i=0;

    const getType = async (type) => {
        try {
            const url = `https://pokeapi.co/api/v2/type/${type}`
            const res = await axios.get(url)
            setnbPokeType(res.data.pokemon.length);
            setnamePokeType(res.data.name);

            console.log(res)
        } catch (e) {
            console.log(e)
        };
    } 

    var appel= (num) => {

        getType(num);
        nbpok[num]=nbPokeType;
        nameType[num]=namePokeType;
    }

    return (
        <div class="App">
            
            <div className="widget">
                
                {appel(1)}
                {nbpok[1]} {nameType[1]}
                
                
                {/*<div className="divTable">
                    <div className="divTableBody">
                        <div className="divTableRow">
                            <div className="divTableCell">{nameType[1]}</div>
                            <div className="divTableCell">{nbParType[1]}</div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">{nameType[2]}</div>
                            <div className="divTableCell">{nbParType[2]}</div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">{nameType[3]}</div>
                            <div className="divTableCell">{nbParType[3]}
                            </div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">{nameType[4]}</div>
                            <div className="divTableCell">{nbParType[4]}</div>
                        </div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">{nameType[0]}</div>
                        <div className="divTableCell">{nbParType[0]}</div>
                    </div>
    </div>*/}
    </div>
        </div>
    );

};