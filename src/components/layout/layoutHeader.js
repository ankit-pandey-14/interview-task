import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const LayoutHeader = () => {
    return(
        <header className='d-flex w-100 h-80p shadow header'>
            <div className='logo'>FabHotels</div>
            <div className='d-flex menu'>
                <Link to={'#'}>Home</Link>
                <Link to={'#'}>About</Link>
            </div>
            <div className='social-icons'>
                <Link to={'#'}> <InstagramIcon /> </Link>
                <Link to={'#'}> <TwitterIcon /> </Link>
                <Link to={'#'}> <FacebookIcon /> </Link>
            </div>
        </header>
    );
};

export default LayoutHeader;