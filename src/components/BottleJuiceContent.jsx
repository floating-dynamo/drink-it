import React from "react";

const BottleJuiceContent = () => {
	return (
		<div className="bottle-content">
			<h4>So Fresh & So Green</h4>
			<h6>
				This nutrient dense green juice drink full of leafy greens, tangy citrus
				and revitalizing mint tea is the best way to drink your veggies and gulp
				your greens.
			</h6>
			<p>
				Our juice bottles contain cucumber, celery, grapefruit, green chard, green
				leaf lettuce, lemon, kale, spinach, parsley, peppermint tea & spearmint
				tea.
			</p>
			<ul>
				{[
					"10.5oz, 12oz, 13.5oz, 46oz",
					"USDA Certified Organic",
					"Non-GMO Project Verified",
					"Kosher certified",
					"Vegan",
					"Dairy-free, soy-free, gluten-free",
					"No added sweeteners",
				].map((item) => {
					return <li>{item}</li>;
				})}
			</ul>
		</div>
	);
};

export default BottleJuiceContent;
