import React from 'react'
import Wrap from '../../../hoc/Wrap'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {

	const ingredientSummary = Object.keys(props.ingredients)
		.map(ignKey => {
			return (
				<li key ={ignKey}>
					<span style={{textTransform: 'capitalize'}}>{ignKey}</span>: {props.ingredients[ignKey]}
				</li>
			)
		});
	return (
		<Wrap>
			<h3>Your Order</h3>
			<p>A Delicious burger with the following ingredients</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p>Continue to Checkout?</p>
			<Button btnType = "Success" clicked = {props.purchaseContinued}>CONTINUE</Button>
			<Button btnType = "Danger" clicked = {props.purchaseCanceled}>CANCEL</Button>
		</Wrap>
	)
};

export default orderSummary;