// Grab Mongoose - npm install mongoose *
const mongoose = require("mongoose");

// ??? Schema out
mongoose.set('strictQuery', false);




const mongoDB = process.env.ATLAS_URI;





//Attch mongoose
async function mongooseConnect() {
  try {
    await mongoose.connect(mongoDB, {dbName: process.env.MONGO_DATABASE}); 
  } catch (error) {
    throw error;
  }
}




module.exports = {
    mongooseConnect
};