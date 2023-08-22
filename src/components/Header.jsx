import React from "react";

const Header = () => {
	return (
		<>
			<div className="col-md-6">
				<div className="row justify-content-center">
					<img src="https://ghibliapi.vercel.app/images/logo.svg" className="border border-3 border-dark rounded m-3" alt="Studio Ghibli" />
				</div>
				<div className="d-flex justify-content-center justify-content-evenly">
					<button className="btn btn-primary">Films</button>
					<button className="btn btn-primary">People</button>
				</div>
			</div>
		</>
	);
};

export default Header;
