import React, { useState } from "react";
import About from "./components/About";
import Films from "./components/Films";
import People from "./components/People";

const App = () => {
	const [showFilms, setShowFilms] = useState(false);
	const [showPeople, setShowPeople] = useState(false);
	const [filmsLoaded, setFilmsLoaded] = useState(false);
	const [peopleLoaded, setPeopleLoaded] = useState(false);

	// Right now i can click one button and it will show all the information and disable the button that was clicked. If i want to click the other button nothing happens. I have to reload the page to be able to click the other button, how do i make it to where i can swap between buttons without refreshing the page?

	const handleLoadedFilms = () => {
		setShowFilms(true);
		setFilmsLoaded(true);
	};
	const handleLoadedPeople = () => {
		setShowPeople(true);
		setPeopleLoaded(true);
	};

	// i dont like how far my buttons are spread when a screen size gets xxl

	return (
		<>
			<div className="text-center">
				<img src="https://ghibliapi.vercel.app/images/logo.svg" className="border border-3 border-dark rounded m-3" alt="Studio Ghibli" />
			</div>
			<div className="d-flex justify-content-center justify-content-evenly">
				<button className="btn btn-primary" disabled={filmsLoaded} onClick={handleLoadedFilms}>
					Load Films
				</button>
				<button className="btn btn-primary" disabled={peopleLoaded} onClick={handleLoadedPeople}>
					Load People
				</button>
			</div>
			{showFilms && <Films />}
			{showPeople && <People />}
			<About />
		</>
	);
};

export default App;
