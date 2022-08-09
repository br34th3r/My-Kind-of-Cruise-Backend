const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');

const generateData = () => {
	let structure = {
		"adventures": [],
		"recent": [],
		"recommendations": [],
		"blogs": [],
		"popular": []
	};

	for (let i = 0; i < 100; i++) {
		let data = {
			"id": faker.datatype.uuid(),
			"title": faker.address.cityName(),
			"image": faker.image.city(640, 480, true),
			"description": faker.lorem.paragraph(),
			"price": faker.commerce.price(200, 5000, 2, "£")
		};
		if (i % 5 == 0) {
			structure["adventures"].push(data);
		} else if (i % 4 == 0) {
			structure["recent"].push(data);
		} else if (i % 3 == 0) {
			structure["recommendations"].push(data);
		} else if (i % 2 == 0) {
			structure["blogs"].push({
				"id": faker.datatype.uuid(),
				"title": faker.lorem.lines(1),
				"description": faker.lorem.paragraph(),
				"image": faker.image.city(640, 480, true)
			});
		} else {
			structure["popular"].push(data);
		}
	}

	return structure;
}

const data = generateData();

router.get('/allCruises', (req, res) => {
	res.status(200).json(data);
});

router.get('/adventures', (req, res) => {
	res.status(200).json(data["adventures"]);
});

router.get('/recent', (req, res) => {
	res.status(200).json(data["recent"]);
});

router.get('/recommendations', (req, res) => {
	res.status(200).json(data["recommendations"]);
});

router.get('/blogs', (req, res) => {
	res.status(200).json(data["blogs"]);
});

router.get('/popular', (req, res) => {
	res.status(200).json(data["popular"]);
});

module.exports = router;
