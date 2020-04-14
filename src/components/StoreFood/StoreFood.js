import React, {useState, useEffect} from 'react';
import data from '../../fakeData/fakeData';
import SingleFood from '../SingleFood/SingleFood';
import './StoreFood.css';

const StoreFood = () => {
    const [foodItems, setFoodItems] = useState([])

    useEffect(() => {
        setFoodItems(data)
    }, [])


    return (
        <div className="container">
            <h1 className="all-category-heading">All Categories Food Here</h1>
            <div className="row single-category-food">
                
                {   
                    foodItems.map(itemPd => <SingleFood key={itemPd.id} itemPd={itemPd} ></SingleFood>)
                }
            </div>
        </div>
    );
};

export default StoreFood;