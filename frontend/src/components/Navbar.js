import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import titre from '../images/titre.png';
import axios, { Axios } from "axios";
import "./Navbar.css";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    </Menu>
  );

  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.get(url)
      toArray.push(res.data);
      setPokemonData(toArray);
      console.log(res)
    } catch (e) {
      console.log(e)
    };
  }

  const chargerTeam = () =>{
    Axios.post("http://localhost:3001/insert", {nom: pokemon});
  }

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  }


  return (
    <><Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <input type="image" src={titre} onClick = "Accueil()"></input>

          <Box display="flex"
            width={600} height={80}
            alignItems="center"
            justifyContent="center">

            <Search>
              <form onSubmit={handleSubmit}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  input="text"
                  placeholder="Chercher un Pokemon"
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={handleChange}
                />
              </form>
            </Search>

          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>

      <div className="App">
        {pokemonData.map((data) => {
          return (
            <div>
            <div className="widget">
              <img className="imgPoke" src={data.sprites["front_default"]} />
              <div className="divTable">
                <div className="divTableBody">
                  <div className="divTableRow">
                    <div className="divTableCell">Name</div>
                    
                    <div className="divTableCell">{data.name}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Type</div>
                    <div className="divTableCell">{data.types[0].type.name}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Height</div>
                    <div className="divTableCell">{" "}{Math.round(data.height * 3.9)} "
                    </div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Weight</div>
                    <div className="divTableCell">{" "}{Math.round(data.weight / 4.3)} lbs</div>
                  </div>
                </div>
              </div>

              <div className="divTable">
                <div className="divTableBody">
                  <div className="divTableRow">
                    <div className="divTableCell">Stat Attack</div>
                    <div className="divTableCell">{data.stats[1].base_stat}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Stat Defense</div>
                    <div className="divTableCell">{data.stats[2].base_stat}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Stat Speed</div>
                    <div className="divTableCell">{data.stats[5].base_stat}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Stat special-attack</div>
                    <div className="divTableCell">{data.stats[3].base_stat}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Stat special-defense</div>
                    <div className="divTableCell">{data.stats[4].base_stat}</div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">Stat health point</div>
                    <div className="divTableCell">{data.stats[0].base_stat}</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
            <Button variant="contained" onClick={chargerTeam()}>Add to team</Button>
              </div>
              </div>
          );
        })}
        <div>
        </div>
      </div></>
  );
}