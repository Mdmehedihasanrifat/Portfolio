import React from 'react';
import '../PortfolioList/portfoliolist.css';

const PortfolioList = ({ id, title, active, setSelected }) => {
    return (
        <div>
            <li
                className={active ? "portfolioList active" : "portfolioList"}
                onClick={() => setSelected(id)}
            >
                {title}
            </li>
        </div>
    );
};

export default PortfolioList;