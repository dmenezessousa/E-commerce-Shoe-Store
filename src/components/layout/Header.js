import React from 'react'
import { Link } from "react-router-dom";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import './navbar.css'


function Header() {

    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'flex'}}>
                <h4>Women</h4>
                <h4>Men</h4>
                <h4>Kids</h4>
                <h4>Sale</h4>
            </div>
            <div style={{width: 300, marginLeft: -150}}>
            <Link to="/">
                <h2 className='nav-logo'>Shoe Store</h2>
            </Link>   
            </div>

            <div style={{display: 'flex', justifyContent: 'right', marginRight: 20}}>
            <Link to="/cart">
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ ml: 1 ,color: "black", marginTop: 2}}
                >
                <ShoppingCartIcon  />
                </IconButton>
            </Link >
            </div> 
                            
        </div>
    )
}

export default Header;

