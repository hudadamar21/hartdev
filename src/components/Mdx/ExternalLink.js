import React from "react"

const ExternalLink = props => {
	if (props.href.includes('https://hartdev.site') || props.href[0] === '/') {
		return <a href={props.href}>{props.children}</a>
	}
	return (
		<a href={props.href} target="_blank" rel="noopener noreferrer">
			{props.children}
		</a>
	)
}

export default ExternalLink