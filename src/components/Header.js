import React, { useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteToken} from "../store/actions/single";
import logo from '../assets/images/logo.png';


const navLinks = [
    {
        display: 'Home',
        url: '/'
    },
    {
        display: "Menu",
        url: "/shop/food-court-product"
    },
]


function Header() {

    const dispatch = useDispatch()
    const token = useSelector(state => state.login.token);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const logout = () => {
        setLoading(true)
        setTimeout(()=>{
            dispatch(deleteToken());
            navigate('/login')
            setLoading(false)
        },1000)
    }


    return (
        <div>
            <header className="site-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="header-logo">
                                <Link to={'/'}>
                                    <img src={logo} alt="Logo" className='logo'/>
                                    <h3 className='logo-title'><span>Food</span>Court</h3>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className='main-navigation'>
                                <nav className="header-menu">
                                    <ul className="menu food-nav-menu">
                                        {navLinks.map((item, index) => (
                                            <li className="nav__item" key={index}>
                                                <Link to={item.url}>{
                                                    item.display
                                                }</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                {!token ?
                                    <ul className="menu food-nav-menu">
                                        <li className="nav__item">
                                            <li className="nav__item">
                                                <Link to={'/register'}>Registration</Link>
                                            </li>
                                        </li>
                                    </ul>
                                 :null
                                }
                                <div className="header-right">
                                    {/*<form action="#" className="header-search-form for-des">*/}
                                    {/*    <input type="search" className="form-input" placeholder="Search Here..."/>*/}
                                    {/*    <button type="submit">*/}
                                    {/*        <i className="uil ri-search-line"></i>*/}
                                    {/*    </button>*/}
                                    {/*</form>*/}
                                    <Link to={`/basket`}>
                                    <button className="header-btn header-cart">
                                        <i className="uil ri-shopping-bag-line"></i>
                                    </button>
                                    </Link>
                                    {token ?
                                        <div className='right-menu'>
                                            <ul className="menu food-nav-menu">
                                                <li className="nav__item">
                                                    <button className="header-btn header-cart">
                                                    <Link onClick={logout}>
                                                        <i className="ri-logout-box-r-line"></i>
                                                    </Link>
                                                    </button>
                                                </li>
                                            </ul>
                                            <ul className="menu food-nav-menu">
                                                <Link to={'/profile'}>
                                                    <button className="header-btn">
                                                        <i className="uil ri-user-3-line"></i>
                                                    </button>
                                                </Link>
                                            </ul>
                                        </div>
                                        :
                                        <div>
                                            <ul className="menu food-nav-menu">
                                                <li className="nav__item">
                                                    <button className="header-btn header-cart">
                                                    <Link to={'/login'}><i className="ri-logout-box-line"></i></Link>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
