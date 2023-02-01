import Joke from "../joke";

// An alternative way of declaring a component is to write it as a function which
// returns a React.ReactNode. This is equivalent to the syntax in <ChuckCard/>
const ChuckJoke = (props : Joke) => {

	return (
		<p>{props.joke }</p>
	)
}

export default ChuckJoke;