const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;
const{userRoutes} = require("./routes/api_routes/index-routes")
const{thoughtsRoutes} = require("./routes/api_routes/index-routes")


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Notedb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

mongoose.set('debug', true);

app.use(userRoutes)
app.use(thoughtsRoutes)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
