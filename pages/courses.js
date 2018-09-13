import Link from 'next/link'
import { Fragment } from 'react'
import Header from '../components/Header.js'
import Frame from '../components/Frame.js'

const Courses = props => (
	<Fragment>
		<Header />
		<Frame>
			Vi har följande kurser:
			<ul>
				<li>Serverside programmering</li>
				<li>Folkdans</li>
				<li>Cykling</li>
			</ul>
		</Frame>
	</Fragment>
)
export default Courses
