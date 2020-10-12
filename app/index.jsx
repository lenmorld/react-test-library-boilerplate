import React from "react";
import ReactDOM from "react-dom";

import Fetchy from './components/Fetchy'
import Checky from './components/Checky'

class App extends React.Component {
	render() {
		return (
			<div>
				<Fetchy />
				<hr />
				<Checky />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
