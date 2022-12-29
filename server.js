const express = require("express");
const colors = require("colors");
const cors = require('cors');
const dotenv = require("dotenv").config();
const { errorHandler } = require("./src/api/middleware/errorMiddleware");
const connectDB = require("./src/api/config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/banner", require("./src/api/routes/bannerRoutes"));
app.use("/api/profile", require("./src/api/routes/profileRoutes"));
app.use("/api/test", require("./src/api/routes/testRoutes"));
app.use("/api/pin", require("./src/api/routes/pinterestRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));
