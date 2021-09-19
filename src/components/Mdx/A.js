import React from "react"

const A = props => {
	if (
		props.href.includes('https://hartdev.site') 
		|| props.href[0] === '/' 
		|| props.href[0] === '#'
	) {
		return <a href={props.href}>{props.children}</a>
	}
	return (
		<a href={props.href} target="_blank" rel="noopener noreferrer">
			{props.children}
		</a>
	)
}

export default A