require("dotenv").config();

const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");




const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/enroll", enrollmentRoutes);
// app.use("/api/enrollment", enrollmentRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});