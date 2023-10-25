import express from "express";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./configs/swagger";
import router from "./router";
import { connectDatabase } from "./configs/database";

connectDatabase();

const app = express();

app.use(express.json());
app.use(helmet());

app.use("/api", router);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => {
  console.log("server running on port 3000");
});
