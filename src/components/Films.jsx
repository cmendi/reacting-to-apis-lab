import React, { useEffect, useState } from "react";

const Films = () => {
	const [films, setFilms] = useState([]);

	useEffect(() => {
		fetch("http://api-ghibli.herokuapp.com/films")
			.then((res) => res.json())
			.then((films) => setFilms(films));
	}, []);

	// Scroll to top function to avoid scrolling back up.
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
					{films.map((film) => (
						<div className="col-md-6" key={`film-index-${film.id}`}>
							<div className="card p-0 m-3 shadow">
								<h4 className="card-header p-3 fw-bold">{film.title}</h4>
								<ul className="list-group list-group-flush">
									<li className="list-group-item text-body-tertiary">
										Produced by <span className="text-dark fs-5">{film.producer}</span>
									</li>
									<li className="list-group-item text-body-tertiary">
										Directed by <span className="text-dark fs-5">{film.director}</span>
									</li>
									<li className="list-group-item text-body-tertiary">
										Released in <span className="text-dark fs-5">{film.release_date}</span>
									</li>
									<li className="list-group-item text-body-tertiary">
										Rotten Tomato Score <span className={`${film.rt_score > 80 ? "text-success" : film.rt_score >= 61 ? "text-warning" : "text-danger"} fs-5`}>{film.rt_score}</span>
									</li>
								</ul>
								<p className="card-text px-3 py-2">{film.description}</p>
								<a href={film.url} className="px-3 pb-4" target="_blank">
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

export default Films;
