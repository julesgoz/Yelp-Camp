const Campground = require("../models/campground.js");
const cities = require("./cities.js");
const { places, descriptors } = require("./seedHelpers.js");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp-camp");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected!");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const randomPrice = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "61967e44c24a01119796ac01",
      title: `${sample(descriptors)} ${sample(places)}`,
      image: "https://source.unsplash.com/collection/483251",
      price: randomPrice,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ullam laudantium sint repudiandae dolorem nobis quidem delectus, vitae itaque in. Repellendus repudiandae nihil quibusdam mollitia ullam est, id corrupti animi?",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
