import React from 'react';
import Button from '../UI/Button/Button';
import Aux from '../../hoc/Aux'


const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return ( <li key={igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
        )});
    
   
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious Burger with following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
           
                <Button btnType='Danger' clicked={props.purchaseCanceled}>Cancel</Button>
                <Button btnType='Success' clicked={props.purchaseContinued}>Continue</Button>

        </Aux>
    )
};

export default OrderSummary;