import Link from 'next/link'
import Header from '../components/Header.js'

const Index = props => (
	<div>
		<Header />
		<br/>
		<a href="/courses">Se kurser (ladda om sidan)</a>
		<p>Välkommen till Davids skola!</p>
	</div>
)

export default Index
