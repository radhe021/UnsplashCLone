/** @format */

import React, { useState, useEffect } from "react";
import "./Home.css";
import unsplash from "../../APIs/unsplashAPIs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Image } from "react-bootstrap";

function Home() {
	const [pageNo, setpageNo] = useState(1);
	const [images, setimages] = useState([]);

	useEffect(() => {
		unsplash.photos
			.getRandom({
				count: 1,
			})
			.then((result) => {
				if (result.errors) {
					console.log("error occurred:x ", result.errors[0]);
				} else {
					if (result?.response.length !== 0) {
						const photo = result?.response[0].urls.raw;
						console.log("one x imaes ", photo);

						document.getElementsByClassName(
							"srch-section"
						)[0].style.backgroundImage = `url(${photo})`;
					}
				}
			});
	}, []);

	useEffect(() => {
		unsplash.photos.list({ page: pageNo, perPage: 15 }).then((result) => {
			if (result.errors) {
				// handle error here
				console.log("error occurred: ", result.errors[0]);
			} else {
				// handle success here
				const photo = result.response.results;
				if (images.length == 0) {
					console.log("No imaes ");
					setimages(photo);
				} else {
					console.log("photos ", images);
					setimages([...images, ...photo]);
				}
			}
		});
	}, [pageNo]);
	window.onscroll = function (ev) {
		console.log("not Bottom of page");
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
			console.log("Bottom of page");
			setpageNo((state) => state + 1);
		}
	};

	return (
		<>
			<div className="container p-0 m-0">
				<div className="srch-section">
					<div className="justify-content-center align-item-center">
						<h2 className="text-light fw-bold fs-1">Unsplash</h2>
						<h6 className="text-light fw-bold fs-5">
							The internet’s source for visuals.
						</h6>
						<h6 className="text-light fw-bold fs-5">
							Powered by creators everywhere.
						</h6>
						<Form className="d-flex search-form mt-3">
							<Form.Control
								type="search"
								placeholder="🔍 Search free high-resolution photos"
								className="me-2 rounded "
								style={{ height: "50px" }}
								aria-label="Search"
							></Form.Control>
						</Form>
					</div>
				</div>{" "}
			</div>
			<Container className="mt-2">
				<div className="photogrid ">
					{images.map((ele) => (
						<img
							className="bg-secondary col m-1 rounded text-center cardx"
							xs={6}
							sm={6}
							md={4}
							lg={4}
							src={ele?.urls?.small}
							key={ele?.id}
						/>
					))}
				</div>
			</Container>
		</>
	);
}

export default Home;
