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
  for (let i = 0; i < 300; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const randomPrice = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "61967e44c24a01119796ac01",
      title: `${sample(descriptors)} ${sample(places)}`,
      images: [
        {
          url: "https://res.cloudinary.com/djqknpjxv/image/upload/v1637352539/YelpCamp/orfvxtzrufpliwquoedj.jpg",
          filename: "YelpCamp/orfvxtzrufpliwquoedj",
        },
        {
          url: "https://res.cloudinary.com/djqknpjxv/image/upload/v1637352539/YelpCamp/tax8zqg1l1r10tfamq8y.jpg",
          filename: "YelpCamp/tax8zqg1l1r10tfamq8y",
        },
        {
          url: "https://res.cloudinary.com/djqknpjxv/image/upload/v1637352539/YelpCamp/jzht9qj5tnpy406seva5.jpg",
          filename: "YelpCamp/jzht9qj5tnpy406seva5",
        },
        {
          url: "https://res.cloudinary.com/djqknpjxv/image/upload/v1637352539/YelpCamp/qzuwnclqd04adnocr4sj.jpg",
          filename: "YelpCamp/qzuwnclqd04adnocr4sj",
        },
        {
          url: "https://res.cloudinary.com/djqknpjxv/image/upload/v1637352539/YelpCamp/ppvbdbdthfkpm6eg8qmq.jpg",
          filename: "YelpCamp/ppvbdbdthfkpm6eg8qmq",
        },
        {
          url: "https://res.cloudinary.com/djqknpjxv/image/upload/v1637352539/YelpCamp/v2b00tiwlg2wvfz9i9lh.jpg",
          filename: "YelpCamp/v2b00tiwlg2wvfz9i9lh",
        },
        {
          url: "https://res.cloudinary.com/djqknpjxv/image/upload/v1637352539/YelpCamp/zpoojcjuljqwxogu5dov.jpg",
          filename: "YelpCamp/zpoojcjuljqwxogu5dov",
        },
        {
          url: "https://res.cloudinary.com/djqknpjxv/image/upload/v1637352539/YelpCamp/lirjkj648t6cyi2wewah.jpg",
          filename: "YelpCamp/lirjkj648t6cyi2wewah",
        },
        {
          url: "https://res.cloudinary.com/djqknpjxv/image/upload/v1637352539/YelpCamp/x3rptgr0ndczuxd43fvf.jpg",
          filename: "YelpCamp/x3rptgr0ndczuxd43fvf",
        },
        {
          url: "https://res.cloudinary.com/djqknpjxv/image/upload/v1637352539/YelpCamp/ryhj5odvfpaokhxz1xnu.jpg",
          filename: "YelpCamp/ryhj5odvfpaokhxz1xnu",
        },
        {
          url: "https://res.cloudinary.com/djqknpjxv/image/upload/v1637352539/YelpCamp/vatzzhouqvad2umidjd2.jpg",
          filename: "YelpCamp/vatzzhouqvad2umidjd2",
        },
        {
          url: "https://res.cloudinary.com/djqknpjxv/image/upload/v1637352539/YelpCamp/pgtmu9z3xrrrgqyyrwx6.jpg",
          filename: "YelpCamp/pgtmu9z3xrrrgqyyrwx6",
        },
        {
          url: "https://res.cloudinary.com/djqknpjxv/image/upload/v1637352539/YelpCamp/ags1ayielqt86s3sb9zw.jpg",
          filename: "YelpCamp/ags1ayielqt86s3sb9zw",
        },
        {
          url: "https://res.cloudinary.com/djqknpjxv/image/upload/v1637352539/YelpCamp/dlcrby1lpotglxyqkzmd.jpg",
          filename: "YelpCamp/dlcrby1lpotglxyqkzmd",
        },
      ],
      price: randomPrice,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ullam laudantium sint repudiandae dolorem nobis quidem delectus, vitae itaque in. Repellendus repudiandae nihil quibusdam mollitia ullam est, id corrupti animi?",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
