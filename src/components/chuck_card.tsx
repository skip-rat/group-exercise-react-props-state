// 💡 You can import assets like images directly and use them in your components:
import { isPropertySignature } from 'typescript';
import ChuckImage from '../assets/chuck_norris.jpg';

interface Greeting {
	greeting: string;
}
const ChuckCard = (props : Greeting) =>
	// 💡 This weird-looking `<>` thing is a "Fragment". Each component must have exactly one child.
	// 💡 As a result, sometimes it is useful to wrap components in Fragments like this:
	<>
		<h2>{ props.greeting }</h2>

		<img src={ChuckImage} alt='A handsome man' />
	</>


export default ChuckCard;