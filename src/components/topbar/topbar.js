import React from 'react';
import './topbar.css'
import PersonIcon from '@material-ui/icons/Person';
const Topbar = () => {
    return (
        <div className="topbar">
         <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Md Mehedi Hasan.</a>
                    <div className="itemContainer"></div>
                    <PersonIcon><span>+8990***</span></PersonIcon>
                </div>
             <div className="right">
                 <a href="#intro">intro</a>
             </div>
         </div>
        </div>
    );
};

export default Topbar;