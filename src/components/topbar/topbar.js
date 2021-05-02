import React from 'react';
import './topbar.css'
import PersonIcon from '@material-ui/icons/Person';
import Mail from '@material-ui/icons/Mail';
const Topbar = () => {
    return (
        <div className="topbar active ">
         <div className="wrapper">
                <div className="left ">
                    <a href="#intro" className="logo">Md Mehedi Hasan.</a>
                    <div className="itemContainer">
                    <PersonIcon className="icon"></PersonIcon>
                        <span>+8801683952127</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"></Mail>
                        <span>mehedi.rifat@gmail.com</span>
                    </div>

                </div>

             <div className="right">
                 <div className="hamburger">
                     <span className="line1"></span>
                     <span className="line2"></span>
                     <span className="line3"></span>
                 </div>
             </div>
         </div>
        </div>
    );
};

export default Topbar;