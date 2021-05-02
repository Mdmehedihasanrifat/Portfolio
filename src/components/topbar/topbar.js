import React from 'react';
import './topbar.css'
import PersonIcon from '@material-ui/icons/Person';
import Mail from '@material-ui/icons/Mail';
const Topbar = () => {
    return (
        <div className="topbar">
         <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Md Mehedi Hasan.</a>
                    <div className="itemContainer">
                    <PersonIcon></PersonIcon>
                        <span>+8801683952127</span>
                    </div>
                    <div className="itemContainer">
                        <Mail></Mail>
                        <span>mehedi.rifat@gmail.com</span>
                    </div>

                </div>

             <div className="right">
                 <a href="#intro">intro</a>
             </div>
         </div>
        </div>
    );
};

export default Topbar;