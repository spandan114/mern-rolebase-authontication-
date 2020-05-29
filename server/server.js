const express = require("express");
const mongoose = require("mongoose");
const {MONGO_URI} = require('./config/key')



const app = express();

//============= MONGOOSE SETTING ==============//
mongoose
  .connect(MONGO_URI,
    {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
  .then(() => console.log("Mondodb Connected ...."))
  .catch(err => console.error(err));
//---------model--------//
  require('./models/usermodel')

//==========RUTING========//
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server working 🔥");
});

app.use('/auth',require('./routes/authroute'))

//===========PORT SETTING============//

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port port ${port}`));