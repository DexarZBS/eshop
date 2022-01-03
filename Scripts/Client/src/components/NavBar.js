import React, {useContext} from 'react';
import {Context} from "../index";
import '../Style.css'
import BusketLogo from "../Images/bucketicon.svg"
import ProfileLogo from "../Images/usericon.svg"
import MainLogo from "../Images/favicon.svg"
import {SHOP_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    const {user} = useContext(Context)
    return (
    <nav >
        <ul className="mainlist">
            <li className="items"> <img height={34} width={34} src={MainLogo} /> </li>
            <li className="items"> <p>Товары</p> </li>
            <li className="items"><p>О нас</p> </li>
            <li className="items"> <p>Статистика</p> </li>
            <li className="items"> <p>Оплата и доставка</p> </li>
        </ul>
        <ul className="basketlist">
            <li className="items"> <img height={34} width={34} src={BusketLogo}/> </li>
            <li className="items"> <img height={34} width={34} src={ProfileLogo}/> </li>
        </ul>
    </nav>
    );
};

export default NavBar;