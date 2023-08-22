import React from "react";
import About from "./components/About";
import Header from "./components/Header";

const App = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-center">
					<Header />
					<About />
				</div>
			</div>
		</>
	);
};

export default App;
