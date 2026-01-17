const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../Models/listings");

const mongoUrl = "mongodb://127.0.0.1:27017/WanderlustDB";

// Database connection
main().then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.log("Error connecting to MongoDB:", err);
});

async function main() {
    await mongoose.connect(mongoUrl);
}

const initDB = async () => {
   await Listing.deleteMany({});
   initData.data = initData.data.map((obj) => ({...obj, owner: "6962378720e2dd198c16f205"}));
   await Listing.insertMany(initData.data);
   console.log("Database initialized ");
}
initDB();
