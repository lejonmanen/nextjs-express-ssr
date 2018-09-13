import Link from 'next/link'

const buttonStyle = {
	backgroundColor: 'hotpink',
	border: '3px dotted blue',
	borderRadius: '5px',
	color: 'white'
};

const Header = props => (
	<div>
		<Link href="/">
			<button style={buttonStyle}>Startsida</button>
		</Link>
		<Link href="/courses">
			<button style={buttonStyle}>Kurser</button>
		</Link>
	</div>
)

export default Header
