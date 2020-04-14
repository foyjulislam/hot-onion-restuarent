import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        
        <div className="container-fluid w-100 banner">
            <div className="row">
                <div className="col-md-6 offset-3 position-center">
                    <div className="text-center banner-content">
                        <h2>Best food waiting for your belly</h2>
                        <div className="banner-input">
                            <input type="text" placeholder="Search food items"/>
                            <button className="btn primary-btn banner-search-btn">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;