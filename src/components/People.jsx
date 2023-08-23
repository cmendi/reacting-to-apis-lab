import React, { useEffect, useState } from "react";

const People = () => {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		fetch("http://api-ghibli.herokuapp.com/people")
			.then((res) => res.json())
			.then((people) => setPeople(people));
	}, []);

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			<main className="container mt-5">
				<section className="row justify-content-center">
					{people.map((people) => (
						<div className="col-md-6" key={`film-index-${people.id}`}>
							<div className="card p-0 m-3 shadow">
								<h4 className="card-header p-3 fw-bold">{people.name}</h4>
								<ul className="list-group list-group-flush">
									<li className="list-group-item text-body-tertiary">
										Gender <span className="text-dark fs-5">{people.gender}</span>
									</li>
									<li className="list-group-item text-body-tertiary">
										Age <span className="text-dark fs-5">{people.age}</span>
									</li>
									<li className="list-group-item text-body-tertiary">
										Eye Color <span className="text-dark fs-5">{people.eye_color}</span>
									</li>
									<li className="list-group-item text-body-tertiary">
										Hair Color <span className="text-dark fs-5">{people.hair_color}</span>
									</li>
								</ul>
								<a href={people.url} className="px-3 p-4" target="_blank">
									API Resource Link
								</a>
							</div>
						</div>
					))}
				</section>
			</main>
			<div className="d-flex justify-content-center m-3">
				<button className="btn btn-primary" onClick={scrollTop}>
					Back to Top
				</button>
			</div>
		</>
	);
};

export default People;
