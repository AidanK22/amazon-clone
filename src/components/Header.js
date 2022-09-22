import React from 'react';

import '../styling/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../store/StateProvider';
import { auth } from '../firebase';


function Header() {

    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }
    
    return (
        <div className='header'>
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>

            </Link>
            
            <div className="header__search" >
                <input className="header__searchInput" alt="amazon logo" type="text" />
                <SearchIcon className="header__searchIcon"/>
                
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'} className='header__signInLink'>
                    <div onClick={handleAuthentication} className='header__option'>
                        <span className="header__optionLineOne">Hello</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className='header__option'>
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className='header__option'>
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <div className="header__optionBasket">
                    <Link className="header__checkoutLink" to="/checkout">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket.length}</span>

                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Header
