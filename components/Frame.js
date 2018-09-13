

const frameStyle = {
	border: '3px dotted blue',
	padding: '10px',
	margin: '4px'
}

const Frame = props => (
	<div style={frameStyle}>
		{props.children}
	</div>
)
export default Frame
