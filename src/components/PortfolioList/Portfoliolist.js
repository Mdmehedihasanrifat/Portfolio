import React from 'react';

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