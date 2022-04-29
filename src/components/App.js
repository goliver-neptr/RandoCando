import React from 'react'
import { useState, useEffect } from 'react'

import ItemList from './ItemList'

const App = () => {

	const [items, setItems] = useState(null)
	const [isPending, setIsPending] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		fetch('https://random-data-api.com/api/cannabis/random_cannabis?size=5')
		.then (res => {
			return res.json()
		})
		.then (data => {
			setItems(data)
			setIsPending(false)
		})
		.catch(e => {
			setError(e.message)
			setItems(null)
			setIsPending(false)
		})
	}, [])
	
	return (
		<>
			{ error && <h3 className="error">{error}</h3> }
			{ isPending && <h3 className="loading">Loading...</h3> }

			<h1 className="item-header">Random Cannabis Information</h1>
			
			<div className="items">
				{ items && <ItemList items={items}/> }
			</div>
		</>
	)
}

export default App