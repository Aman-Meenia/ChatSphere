import app from "./server.js";
import ConnectDB from "./db/ConnectDB.js";
// import cookieParser from "cookie-parser";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/api/v1/user", (req, res) => {
  res.send("Helll Aman Meenia");
});

// app.use(cookieParser());
app.use(cookieParser());

// <---------------------Routing ----------------------->
import userRoutes from "./routes/userRoutes.js";
import requestRoutes from "./routes/requestRoutes.js";
import friendRoutes from "./routes/friendRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/request", requestRoutes);
app.use("/api/v1/friend", friendRoutes);
app.use("/api/v1/message", messageRoutes);

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
