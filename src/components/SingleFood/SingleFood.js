import React from 'react';
import { withRouter } from 'react-router-dom';

const SingleFood = (props) => {
    //console.log(props.itemPd.id);
    const {name, img, subtitle, price, id} = props.itemPd;
    return (
        <div className="col-xl-4 d-flex">
           <div className="card-deck text-center category-product" onClick={()=>props.history.push(`/product/${id}`)}>
                <div className="card p-4">
                    <img className="card-img-top" src={img} alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{subtitle}</p>
                        <p className="card-text">{price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(SingleFood);