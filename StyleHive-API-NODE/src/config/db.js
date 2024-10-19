const mongoose = require("mongoose")

const mondbUrl = "mongodb+srv://saivyshnavananthula:s2zU27JMEV7Me9er@cluster0.8dzdg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb}