const dotenv = require("dotenv");

dotenv.config();
const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;
const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("---", err);
      else {
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection("food to");
        fetched_data.find({}).toArray(async function (err, data) {
          const foodCategory = await mongoose.connection.db.collection(
            "foodCategory"
          );
          foodCategory.find({}).toArray(function (err, catData) {
            if (err) console.log(err);
            else {
              global.foodto = data;
              global.foodCategory = catData;
            }
          });
          // console.log(global.foodto)
          // else console.log(data);
        });
      }
    }
  );
};

module.exports = mongoDB;
