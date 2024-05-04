import app from "./server.js";
import ConnectDB from "./db/ConnectDB.js";

app.get("/api/v1/user", (req, res) => {
  res.send("Helll Aman Meenia");
});

// <---------------------Routing ----------------------->
import userRoutes from "./routes/userRoutes.js";
import requestRoutes from "./routes/requestRoutes.js";

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/request", requestRoutes);

//  Running Server and MongoDB connection
const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await ConnectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
