import React from "react";

const App = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-6">
						<div className="row justify-content-center">
							<img src="https://ghibliapi.vercel.app/images/logo.svg" className="border border-3 border-dark rounded m-3" alt="Studio Ghibli" />
						</div>
						<div className="d-flex justify-content-center justify-content-evenly">
							<button className="btn btn-primary">Films</button>
							<button className="btn btn-primary">People</button>
						</div>
					</div>
					<div className="container d-flex justify-content-center m-5">
						<div className="card shadow col-7">
							<div className="card-body">
								<h3 className="card-title text-center">Studio Ghibli API Lab</h3>
								<p className="card-text">
									This lab shows off my awesome React skills. It utilizes conditional rendering, fetching data from REST API utilizing an useEffect hook, managing mulitple array maps utilizing an
									useState hook, and Boostrap for that iconic style. Click a button to view the resources from Studio Ghibli and enjoy!
								</p>
								<h6 className=" text-center card-subtitle m-2 text-body-secondary">
									If you like what you see, contact me up here:{" "}
									<a href="https://mendenhallmedias.com/" target="_blank" className="text-primary">
										My Website
									</a>
								</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
