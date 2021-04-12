const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const colors = require('colors');
const cors = require('cors');

dotenv.config();
const app = express();


//Routes
const statecases = require('./Routes/Statewise');
const details = require('./Routes/Details');
const bio = require('./Routes/Bio')

app.use(express.json());
app.use(cors({origin: "http://localhost:3000"}))

const connDB = async () =>{
   try {
       await mongoose.connect(process.env.MONGO_URI, {
           useNewUrlParser: true,
           useFindAndModify: true,
           useUnifiedTopology: true
       })
       console.log(`Mongo DB connected`.blue.inverse);
   } catch (error) {
       console.log('Some error occured'.red);
   }
}

connDB();

//Using the routes
app.use('/api/v1', statecases);
app.use('/api/v1', details);
app.use('/api/v1', bio)

const PORT= process.env.PORT || 5000
app.listen(PORT,()=>console.log(`Server running at port ${PORT}`.green.bold));