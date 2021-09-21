import React from "react"

const A = props => {
	if (props.href && ['/', '#'].includes(props.href[0])) {
		return <a {...props}>{props.children}</a>
	}
	return (
		<a {...props} target="_blank" rel="noopener noreferrer">
			{props.children}
		</a>
	)
}

export default A