import React from 'react'

const ItemList = ({ items }) => {
	return (
		items.map(item => (
			<div className="item">				
				<h1 className="item-header">{item.strain}</h1>
				
				<h3 className="item-subheader">Cultivated by</h3>
				<p className="item-content">{item.brand}</p>
				<h3 className="item-subheader">Health benefit</h3>
				<p className="item-content">{item.medical_use}</p>
				<h3 className="item-subheader">Medical usage</h3>
				<p className="item-content">{item.medical_use}</p>
				
				<div className="sublist">
					<p className="sublist-item">{item.type}</p>
					<p className="sublist-item">{item.cannabinoid_abbreviation}</p>
					<p className="sublist-item">{item.terpene}</p>
				</div>					
			</div>
		))
	)
}

export default ItemList