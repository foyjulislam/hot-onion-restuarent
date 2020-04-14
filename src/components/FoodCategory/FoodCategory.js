import React, { useState, useEffect } from 'react';
import './FoodCategory.css';
import data from '../../fakeData/fakeData'
import SingleFood from '../SingleFood/SingleFood';
import { withRouter } from 'react-router-dom';



const FoodCategory = (props) => {

    // step2
    const [activeCategory, setActiveCategory] = useState({
        activeBreakfast: true,
        activeLunch:false,
        activeDinner:false
    })

    const [categoryItem, setCategoryItem] = useState('breakfast')

    // step1
    const [foodItems, setFoodItems] = useState([])
    
    useEffect(() => {
        const productData = data.filter(itemPd => itemPd.category === categoryItem)
        setFoodItems(productData);
    }, [categoryItem])
    console.log(foodItems);

    // conditionally category set data
    const handleSelect = itemPd => {
        if (itemPd === 'breakfast') {
            let previousState = activeCategory;
            previousState.activeBreakfast = true
            previousState.activeLunch = false
            previousState.activeDinner = false
            setActiveCategory(previousState)
        } else if (itemPd === 'lunch') {
            let previousState = activeCategory;
            previousState.activeBreakfast = false
            previousState.activeLunch = true
            previousState.activeDinner = false
            setActiveCategory(previousState)
        } else if (itemPd === 'dinner') {
            let previousState = activeCategory;
            previousState.activeBreakfast = false
            previousState.activeLunch = false
            previousState.activeDinner = true
            setActiveCategory(previousState)
        }
        setCategoryItem(itemPd)
    }

    const { activeBreakfast, activeLunch, activeDinner } = activeCategory;

    return (
        <div>
            <div className="category-area">
                <div className="container">
                    <div className="row">
                        <div className="category m-auto py-5">
                            <ul className="break-lunch-dinner d-flex">
                                <li><button className={activeBreakfast ? 'active btn btn-outline-danger btn-sm' : 'btn btn-outline-secondary btn-sm'}
                                            onClick={() => handleSelect('breakfast')}
                                >Breakfast</button></li>
                                <li><button className={activeLunch ? 'active btn btn-outline-danger btn-sm' : 'btn btn-outline-secondary btn-sm'}
                                            onClick={() => handleSelect('lunch')}
                                >Lunch</button></li>
                                <li><button className={activeDinner ? 'active btn btn-outline-danger btn-sm' : 'btn btn-outline-secondary btn-sm'}
                                            onClick={() => handleSelect('dinner')}
                                >Dinner</button></li>
                            </ul>
                        </div>
                        <div className="f-right d-flex align-items-center text-danger">
                            <p className="all-product ml-auto p-2" onClick={()=> props.history.push('/product')}>See All</p>
                        </div>
                    </div>
                    <div className="row single-category-food">
                        
                        {
                            foodItems.map(itemPd => <SingleFood
                            key={itemPd.id} itemPd={itemPd}
                            ></SingleFood>)
                        }
                        
                        <div className="checkout-btn m-auto">
                            <button class="btn btn-secondary btn-lg d-flex" disabled>Checkout your food</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(FoodCategory);