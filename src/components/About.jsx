import React from "react";

const About = () => {
	return (
		<>
			<div className="container col-md-6 mt-5">
				<div className="card shadow mb-5">
					<div className="card-body">
						<h3 className="card-title text-center">Studio Ghibli API Lab</h3>
						<p className="card-text">
							This lab shows off what i can do in React. It utilizes conditional rendering, fetching data from REST API utilizing an useEffect hook, managing mulitple array maps utilizing an useState
							hook, and Boostrap for that iconic style. Click a button to view the resources from Studio Ghibli and enjoy!
						</p>
						<h6 className=" text-center card-subtitle m-2 text-secondary">
							If you like what you see, contact me up here:{" "}
							<a href="https://mendenhallmedias.com/" target="_blank" className="text-primary">
								My Website
							</a>
						</h6>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
